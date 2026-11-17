import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { RequestUploadDto, ConfirmUploadDto } from '../dto/media.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MediaService {
  private readonly logger = new Logger(MediaService.name);
  private readonly s3Endpoint: string;
  private readonly s3Bucket: string;

  constructor(private readonly prisma: PrismaService) {
    this.s3Endpoint = process.env.S3_ENDPOINT || 'http://localhost:9090';
    this.s3Bucket = process.env.S3_BUCKET || 'mxh-media';
  }

  async requestUploadUrl(uploaderId: string, dto: RequestUploadDto) {
    // Validate max image size 10MB
    if (dto.mimeType.startsWith('image/') && dto.sizeBytes > 10 * 1024 * 1024) {
      throw new BadRequestException('Images cannot exceed 10MB in size');
    }

    const ext = dto.filename.split('.').pop() || 'bin';
    const fileKey = `uploads/${uploaderId}/${uuidv4()}.${ext}`;
    const publicUrl = `${this.s3Endpoint}/${this.s3Bucket}/${fileKey}`;

    // S3 mock direct upload target
    const uploadUrl = `${this.s3Endpoint}/${this.s3Bucket}/${fileKey}`;

    const media = await this.prisma.mediaFile.create({
      data: {
        uploaderId,
        fileKey,
        originalName: dto.filename,
        mimeType: dto.mimeType,
        sizeBytes: dto.sizeBytes,
        bucket: this.s3Bucket,
        url: publicUrl,
        status: 'PENDING',
      },
    });

    this.logger.log(`Generated upload target for file: ${dto.filename} -> ${fileKey}`);

    return {
      mediaId: media.id,
      uploadUrl,
      publicUrl,
      fileKey,
      expiresInSeconds: 900,
    };
  }

  async confirmUpload(uploaderId: string, dto: ConfirmUploadDto) {
    const media = await this.prisma.mediaFile.findUnique({
      where: { id: dto.mediaId },
    });

    if (!media) throw new NotFoundException('Media record not found');
    if (media.uploaderId !== uploaderId) throw new ForbiddenException('Cannot confirm upload for another user');

    const updated = await this.prisma.mediaFile.update({
      where: { id: dto.mediaId },
      data: { status: 'ACTIVE' },
    });

    return updated;
  }

  async getMedia(mediaId: string) {
    const media = await this.prisma.mediaFile.findUnique({
      where: { id: mediaId },
    });
    if (!media) throw new NotFoundException('Media file not found');
    return media;
  }
}
