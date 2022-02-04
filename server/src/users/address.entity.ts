import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  Index,
  ObjectID,
  ObjectIdColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from './user.entity';

@Entity()
class Address {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  public street: string;

  @Column()
  public city: string;

  @Column()
  public country: string;

  @OneToOne(() => User, (user: User) => user.address)
  public user?: User;
}

export default Address;
