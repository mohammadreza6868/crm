import {BaseEntity, Column, Entity,  OneToMany,  PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => User, (user) => user.customer)
  user: User[];
}
