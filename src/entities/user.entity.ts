import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Customer } from "./customer.entity";
import { Request } from "./request.entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ferstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;
  @Column()
  phonenumber: string;
  @Column()
  username: string;
  @Column()
  password: string;

  @OneToMany(() => Request, (Request) => Request.User)
  Request: Request[];

  @ManyToOne(() => Customer, (customer) => customer.user)
  customer: Customer;
}
