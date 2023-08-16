import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Asset {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;
}
