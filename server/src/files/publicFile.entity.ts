import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity()
class PublicFile {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  public url: string;

  @Column()
  public key: string;
}

export default PublicFile;
