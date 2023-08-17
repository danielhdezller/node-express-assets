import { Column, Entity, ManyToMany } from "typeorm";
import { AppBaseEntity } from "./app-base.entity";
import { APP_DB_SPECS } from "../shared/app.enum";
import { Asset } from "./asset.entity";
import { Collection } from "./collection.entity";

@Entity()
export class Category extends AppBaseEntity {
  @Column({ length: APP_DB_SPECS.MEDIUM_TEXT })
  name: string;

  @ManyToMany(() => Asset, (asset) => asset.categories)
  assets: Asset[];

  @ManyToMany(() => Collection, (collection) => collection.categories)
  collections: Collection[];
}
