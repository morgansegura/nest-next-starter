import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  JoinColumn,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import Address from './address.entity';
import Post from '../posts/post.entity';
import LocalFile from '../localFiles/localFile.entity';
import * as uuid from 'uuid';
// import * as bcrypt from 'bcrypt';

@Entity()
class User {
  @ObjectIdColumn({ nullable: true })
  @Exclude()
  public _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  public id: string;

  @Column({ unique: true })
  public email: string;

  @Column({ nullable: true })
  public phoneNumber?: string;

  @Column()
  public name: string;

  @Column({ nullable: true })
  @Exclude()
  public password?: string;

  @Column({ default: false })
  public isRegisteredWithGoogle: boolean;

  @OneToOne(() => Address, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public address: Address;

  @OneToMany(() => Post, (post: Post) => post.author)
  public posts?: Post[];

  @JoinColumn({ name: 'avatarId' })
  @OneToOne(() => LocalFile, {
    nullable: true,
  })
  public avatar?: LocalFile;

  @Column({ nullable: true })
  public avatarId?: string;

  @Column({
    nullable: true,
  })
  @Exclude()
  public currentHashedRefreshToken?: string;

  @Column({ nullable: true })
  public twoFactorAuthenticationSecret?: string;

  @Column({ default: false })
  public isTwoFactorAuthenticationEnabled: boolean;

  @Column()
  public stripeCustomerId: string;

  @Column({ nullable: true })
  public monthlySubscriptionStatus?: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column({ default: false })
  public isPhoneNumberConfirmed: boolean;

  @BeforeInsert()
  async b4register() {
    this.id = await uuid.v4();
    // this.password = await bcrypt.hash(this.password, 10);
  }

  @BeforeUpdate()
  async b4update() {
    // this.password = await bcrypt.hash(this.password, 10);
  }
}

export default User;
