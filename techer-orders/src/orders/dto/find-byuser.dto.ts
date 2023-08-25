import { ApiProperty } from '@nestjs/swagger';
export class findByUser {
  @ApiProperty()
  user_id: number;
}
