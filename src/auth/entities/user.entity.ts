import { Product } from 'src/products/entities';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
    unique: true,
  })
  email: string;
  @Column({
    type: 'text',
    nullable: false,
    select: false,
  })
  password: string;
  @Column({
    type: 'text',
    nullable: false,
  })
  fullName: string;
  @Column({
    type: 'bool',
    default: false,
  })
  isActive: boolean;
  @Column({
    type: 'text',
    array: true,
    default: ['user'],
  })
  roles: string[];

  @OneToMany(() => Product, (product) => product.user)
  product: Product;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.email = this.email.toLowerCase().trim();
  }
}
