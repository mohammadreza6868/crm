import { ApiProperty } from "@nestjs/swagger";
import { taskstatus } from "src/entities/request.entity";
import { Column } from "typeorm";

export class RequestDto {
  @Column()
  id: number;

  @ApiProperty()
  @Column()
  titele: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  createdatatime: Date;

  @ApiProperty()
  @Column()
  modifydatetime: Date;

  @ApiProperty()
  @Column()
  userid: number;


  @ApiProperty({ enum: ['SEND', 'IN_PROGSESS', 'DONE'] })
  @Column()
  status: taskstatus;
}