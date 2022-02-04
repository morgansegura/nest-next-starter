import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class DatabaseFile {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  filename: string;

  @Column({
    type: 'bytea',
  })
  data: Uint8Array;
}

export default DatabaseFile;
