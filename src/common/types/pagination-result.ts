import { ApiProperty } from '@nestjs/swagger';

export class PaginationResult<T> {
  @ApiProperty({ description: 'Array of items' })
  nodes: T[];

  @ApiProperty({ description: 'Total number of items' })
  totalCount: number;

  @ApiProperty({
    description: 'Whether there are more items after currentpage',
  })
  hasNextPage: boolean;

  @ApiProperty({ description: 'Whether there are items before current page' })
  hasPreviousPage: boolean;
}
