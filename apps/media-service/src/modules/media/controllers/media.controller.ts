import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Headers,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { MediaService } from '../services/media.service';
import { RequestUploadDto, ConfirmUploadDto } from '../dto/media.dto';
// @ts-ignore
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

const uploadDir = join(process.cwd(), 'uploads');

const storage = diskStorage({
  destination: (req: any, file: any, cb: any) => {
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req: any, file: any, cb: any) => {
    const ext = extname(file.originalname).toLowerCase() || '.jpg';
    const filename = `${Date.now()}-${uuidv4()}${ext}`;
    cb(null, filename);
  },
});

const mediaFileFilter = (req: any, file: any, cb: any) => {
  const isImage = file.mimetype.match(/\/(jpg|jpeg|png|gif|webp|bmp|svg\+xml)$/);
  const isVideo = file.mimetype.match(/\/(mp4|webm|quicktime|x-msvideo|mpeg|ogg)$/) || file.mimetype.startsWith('video/');
  if (!isImage && !isVideo) {
    return cb(new BadRequestException('Chỉ cho phép tải lên file hình ảnh (JPG, PNG, WEBP, GIF) hoặc video (MP4, WEBM, MOV)!'), false);
  }
  cb(null, true);
};

@ApiTags('Media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('upload')
  @ApiOperation({ summary: 'Upload a single media file (image/video) from user computer' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file', {
      storage,
      fileFilter: mediaFileFilter,
      limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max
    }),
  )
  async uploadSingle(
    @UploadedFile() file: any,
    @Headers('x-user-id') userId: string,
  ) {
    if (!file) {
      throw new BadRequestException('Không tìm thấy file tải lên');
    }
    const publicUrl = `/api/uploads/${file.filename}`;
    const mediaType = file.mimetype.startsWith('video/') ? 'VIDEO' : 'IMAGE';
    return {
      url: publicUrl,
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimeType: file.mimetype,
      mediaType,
    };
  }

  @Post('upload-multiple')
  @ApiOperation({ summary: 'Upload multiple media files from user computer' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage,
      fileFilter: mediaFileFilter,
      limits: { fileSize: 50 * 1024 * 1024 },
    }),
  )
  async uploadMultiple(
    @UploadedFiles() files: any[],
    @Headers('x-user-id') userId: string,
  ) {
    if (!files || files.length === 0) {
      throw new BadRequestException('Không tìm thấy file nào được tải lên');
    }
    const uploaded = files.map((file) => ({
      url: `/api/uploads/${file.filename}`,
      filename: file.filename,
      originalName: file.originalname,
      size: file.size,
      mimeType: file.mimetype,
      mediaType: file.mimetype.startsWith('video/') ? 'VIDEO' : 'IMAGE',
    }));
    return {
      files: uploaded,
      urls: uploaded.map((f) => f.url),
    };
  }

  @Post('upload-url')
  @ApiOperation({ summary: 'Request unique S3 upload URL with type and size validation' })
  async requestUpload(
    @Headers('x-user-id') userId: string,
    @Body() dto: RequestUploadDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.mediaService.requestUploadUrl(userId, dto);
  }

  @Post('confirm')
  @ApiOperation({ summary: 'Confirm media upload success and activate file' })
  async confirmUpload(
    @Headers('x-user-id') userId: string,
    @Body() dto: ConfirmUploadDto,
  ) {
    if (!userId) throw new UnauthorizedException('User context missing');
    return this.mediaService.confirmUpload(userId, dto);
  }

  @Get(':mediaId')
  @ApiOperation({ summary: 'Get media file metadata by ID' })
  async getMedia(@Param('mediaId') mediaId: string) {
    return this.mediaService.getMedia(mediaId);
  }
}
