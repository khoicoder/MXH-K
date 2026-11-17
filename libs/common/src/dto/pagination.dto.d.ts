export declare class CursorPaginationDto {
    cursor?: string;
    limit: number;
}
export interface PaginatedResult<T> {
    items: T[];
    nextCursor: string | null;
    hasMore: boolean;
    totalCount?: number;
}
