import { Exclude } from 'class-transformer';
import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToMany,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Post from '../posts/post.entity';

@Entity()
class Category {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  public name: string;

  @ManyToMany(() => Post, (post: Post) => post.categories)
  public posts: Post[];

  @DeleteDateColumn()
  public deletedAt: Date;
}

export default Category;
