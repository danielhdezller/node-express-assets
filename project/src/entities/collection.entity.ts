import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { AppBaseEntity } from "./app-base.entity";
import { Asset } from "./asset.entity";
import { APP_DB_SPECS } from "../shared/app.enum";
import { Category } from "./category.entity";

@Entity()
export class Collection extends AppBaseEntity {
  @Column({ length: APP_DB_SPECS.MEDIUM_TEXT })
  name: string;

  @OneToMany(() => Asset, (asset) => asset.collection)
  assets: Asset[];

  @ManyToMany(() => Category, (category) => category.collections)
  @JoinTable()
  categories: Category[];
}
