import {
  Controller,
  Get,
  Post,
  Body,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SearchService } from '../services/search.service';
import { IndexEntityDto } from '../dto/search.dto';

@ApiTags('Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Search users, posts, and hashtags with pagination' })
  async search(
    @Query('q') q: string,
    @Query('type') type?: string,
    @Query('limit') limit?: number,
    @Query('cursor') cursor?: string,
  ) {
    if (!q) return { items: [], nextCursor: null, hasMore: false };
    return this.searchService.search(q, type, limit ? Number(limit) : 20, cursor);
  }

  @Get('suggestions')
  @ApiOperation({ summary: 'Typeahead autocomplete search suggestions' })
  async getSuggestions(
    @Query('q') q: string,
    @Query('limit') limit?: number,
  ) {
    if (!q) return [];
    return this.searchService.getSuggestions(q, limit ? Number(limit) : 5);
  }

  @Post('index')
  @ApiOperation({ summary: 'Internal service index ingestion' })
  async index(@Body() dto: IndexEntityDto) {
    return this.searchService.indexEntity(dto);
  }
}
