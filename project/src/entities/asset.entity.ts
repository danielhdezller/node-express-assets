import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { AppBaseEntity } from "./app-base.entity";
import { Collection } from "./collection.entity";
import { APP_DB_SPECS, AssetTypeEnum } from "../shared/app.enum";
import { Category } from "./category.entity";

@Entity()
export class Asset extends AppBaseEntity {
  @Column({ length: APP_DB_SPECS.MEDIUM_TEXT })
  name: string;

  @Column({ enum: AssetTypeEnum })
  type: AssetTypeEnum;

  @Column({ length: APP_DB_SPECS.MAX_URL_LENGTH })
  pathToFile: string;

  /**
   * Indicates the relation between the entity and the Collection entity.
   *
   * To avoid coupling should not be used, it's definitions only serves to indicate
   * a relation between the collection and the entity in typeorm.
   * @type {(Collection & never)}
   * @memberof Asset
   */
  @ManyToOne(() => Collection, (collection) => collection.assets)
  @JoinColumn({
    name: "collectionId",
  })
  collection: Collection & never;

  /**
   * The Collection id related with the entity.
   *
   * @type {string}
   * @memberof Asset
   */
  @Column({ type: "uuid", name: "collectionId" })
  collectionId: string;

  @ManyToMany(() => Category, (category) => category.assets)
  @JoinTable()
  categories: Category[];
}
