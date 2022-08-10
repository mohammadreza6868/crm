import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Customer } from "./customer.entity";
import { Request } from "./request.entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  FerstName: string;

  @Column()
  LastName: string;

  @Column()
  Email: string;
  @Column()
  PhoneNumber: string;
  @Column()
  UserName: string;
  @Column()
  Password: string;

  @OneToMany(() => Request, (Request) => Request.User)
  Request: Request[];

  @ManyToOne(() => Customer, (customer) => customer.user)
  customer: Customer;
}
