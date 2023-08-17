import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInitialData1692267780554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "category" (name) VALUES ('popular'), ('trending'), ('new');`
    );
    await queryRunner.query(
      `INSERT INTO "collection" (name) VALUES ('music');`
    );
    await queryRunner.query(
      `INSERT INTO "collection_categories_category" ("collectionId", "categoryId") VALUES ((select collection.id from collection WHERE (name = 'music')), (select category.id from category WHERE (name = 'popular'))), ((select collection.id from collection WHERE (name = 'music')), (select category.id from category WHERE (name = 'new')));`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "category"`);
    await queryRunner.query(`DELETE FROM "collection"`);
  }
}
