import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  Index,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class LocalFile {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  filename: string;

  @Column()
  path: string;

  @Column()
  mimetype: string;
}

export default LocalFile;
