import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  Index,
  OneToMany,
  RelationId,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import User from '../users/user.entity';
import Category from '../categories/category.entity';
import Comment from '../comments/comment.entity';
import { Exclude } from 'class-transformer';

@Entity()
class Post {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  public title: string;

  @Column('text', { array: true })
  public paragraphs: string[];

  @Index('post_authorId_index')
  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;

  @RelationId((post: Post) => post.author)
  public authorId: string;

  @ManyToMany(() => Category, (category: Category) => category.posts)
  @JoinTable()
  public categories: Category[];

  @OneToMany(() => Comment, (comment: Comment) => comment.post)
  public comments: Comment[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  scheduledDate?: Date;
}

export default Post;
