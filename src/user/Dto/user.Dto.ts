import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class UserDto {
  @PrimaryGeneratedColumn()
  Id: number;

  @ApiProperty()
  @Column()
  FerstName: string;

  @ApiProperty()
  @Column()
  LastName: string;

  @ApiProperty()
  @Column()
  Email: string;

  @ApiProperty()
  @Column()
  PhoneNumber: string;

  @ApiProperty()
  @Column()
  UserName: string;

  @ApiProperty()
  @Column()
  Password: string;

  @ApiProperty()
  @Column()
  CustomerId: number;
}