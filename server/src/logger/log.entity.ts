import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
class Log {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  public context: string;

  @Column()
  public message: string;

  @Column()
  public level: string;

  @CreateDateColumn()
  creationDate: Date;
}

export default Log;
