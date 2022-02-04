import {
  Column,
  Entity,
  Index,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import ProductCategory from '../productCategories/productCategory.entity';
import { CarProperties } from './types/carProperties.interface';
import { BookProperties } from './types/bookProperties.interface';
import { Exclude } from 'class-transformer';

@Entity()
class Product {
  @ObjectIdColumn()
  @Exclude()
  _id: ObjectID;

  @PrimaryGeneratedColumn('uuid')
  @Index({ unique: true })
  id: string;

  @Column()
  public name: string;

  @ManyToOne(
    () => ProductCategory,
    (category: ProductCategory) => category.products,
  )
  public category: ProductCategory;

  @Column({
    type: 'jsonb',
  })
  public properties: CarProperties | BookProperties;
}

export default Product;
