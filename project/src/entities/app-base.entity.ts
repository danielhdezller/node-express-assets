import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

/**
 * Its the base entity of our applications that have common properties like:
 *  id, createdAt and updatedAt.
 *
 * Its meant to be extended by other entities.
 * @export
 * @abstract
 * @class AppBaseEntity
 * @extends {BaseEntity}
 */
export abstract class AppBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
