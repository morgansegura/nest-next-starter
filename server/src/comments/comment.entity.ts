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
import Post from '../posts/post.entity';
import { Exclude } from 'class-transformer';

@Entity()
class Comment {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  public content: string;

  @ManyToOne(() => Post, (post: Post) => post.comments)
  public post: Post;

  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;
}

export default Comment;
