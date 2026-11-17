import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MediaService } from '../services/media.service';
import { RequestUploadDto, ConfirmUploadDto } from '../dto/media.dto';

@ApiTags('Media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

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
