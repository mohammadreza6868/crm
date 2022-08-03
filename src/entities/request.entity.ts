import {BaseEntity, Column, Entity,  ManyToOne,  OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Respons } from "./respons.entity";
import { User } from "./user.entity";

@Entity()
export class Request extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titele: string;

  @Column()
  description: string;

  @Column()
  createdatatime: Date;
  @Column()
  modifydatetime: Date;


  @Column()
  status: taskstatus;

  @OneToMany(() => Respons, (Respons) => Respons.Request)
  Respons: Respons[];

  @ManyToOne(() => User, (user) => user.Request)
  User: User;
}

export enum taskstatus{
    SEND = 1,
    IN_PROGRESS=2,
    DONE=3,

}


