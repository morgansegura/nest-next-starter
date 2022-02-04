import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../users/user.entity';

@Entity()
class Message {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  public content: string;

  @ManyToOne(() => User)
  public author: User;
}

export default Message;
