import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Customer } from "./customer.entity";
import { Respons } from "./respons.entity";

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
  userid: number;
  
@Column()
  status: taskstatus;

  @OneToMany(() => Respons, (Respons) => Respons.Request)
  Respons: Respons[];

  @ManyToOne(() => Customer, (Customer) => Customer.Request)
  Customer: Customer;
}

export enum taskstatus{
    SEND = 1,
    IN_PROGRESS=2,
    DONE=3,

}


