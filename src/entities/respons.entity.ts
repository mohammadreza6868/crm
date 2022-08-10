import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Request } from "./request.entity";

@Entity()
export class Respons extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  
  @ManyToOne(() => Request, (Request) => Request.Respons)
  Request: Request;
}


