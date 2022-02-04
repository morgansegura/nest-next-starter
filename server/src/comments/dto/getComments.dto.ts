import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class GetCommentsDto {
  @Type(() => String)
  @IsOptional()
  postId?: string;
}

export default GetCommentsDto;
