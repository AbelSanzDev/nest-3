import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
