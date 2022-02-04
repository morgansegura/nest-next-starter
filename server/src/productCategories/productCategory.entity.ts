import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Index,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import Product from '../products/product.entity';

@Entity()
class ProductCategory {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  public name: string;

  @OneToMany(() => Product, (product: Product) => product.category)
  public products: Product[];
}

export default ProductCategory;
