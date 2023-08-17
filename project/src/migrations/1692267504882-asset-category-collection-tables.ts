import { MigrationInterface, QueryRunner } from "typeorm";

export class AssetCategoryCollectionTables1692267504882
  implements MigrationInterface
{
  name = "AssetCategoryCollectionTables1692267504882";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "collection" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "asset" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "type" character varying NOT NULL, "pathToFile" character varying(2048) NOT NULL, "collectionId" uuid NOT NULL, CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "collection_categories_category" ("collectionId" uuid NOT NULL, "categoryId" uuid NOT NULL, CONSTRAINT "PK_ea9e55fc4e88181a90ff7cd17b9" PRIMARY KEY ("collectionId", "categoryId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_76655d1bd522557dd43db7c3eb" ON "collection_categories_category" ("collectionId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a153d17185521102e0fbf150b0" ON "collection_categories_category" ("categoryId") `
    );
    await queryRunner.query(
      `CREATE TABLE "asset_categories_category" ("assetId" uuid NOT NULL, "categoryId" uuid NOT NULL, CONSTRAINT "PK_2a67a1dfd078d529d08a09f5404" PRIMARY KEY ("assetId", "categoryId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_32585019a82e10b7b4a91aab89" ON "asset_categories_category" ("assetId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f02f91612fce2b63a4e0c0b404" ON "asset_categories_category" ("categoryId") `
    );
    await queryRunner.query(
      `ALTER TABLE "asset" ADD CONSTRAINT "FK_3759b1db06e01ac14f271f3dc58" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "collection_categories_category" ADD CONSTRAINT "FK_76655d1bd522557dd43db7c3eb2" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "collection_categories_category" ADD CONSTRAINT "FK_a153d17185521102e0fbf150b09" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "asset_categories_category" ADD CONSTRAINT "FK_32585019a82e10b7b4a91aab89b" FOREIGN KEY ("assetId") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "asset_categories_category" ADD CONSTRAINT "FK_f02f91612fce2b63a4e0c0b404a" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "asset_categories_category" DROP CONSTRAINT "FK_f02f91612fce2b63a4e0c0b404a"`
    );
    await queryRunner.query(
      `ALTER TABLE "asset_categories_category" DROP CONSTRAINT "FK_32585019a82e10b7b4a91aab89b"`
    );
    await queryRunner.query(
      `ALTER TABLE "collection_categories_category" DROP CONSTRAINT "FK_a153d17185521102e0fbf150b09"`
    );
    await queryRunner.query(
      `ALTER TABLE "collection_categories_category" DROP CONSTRAINT "FK_76655d1bd522557dd43db7c3eb2"`
    );
    await queryRunner.query(
      `ALTER TABLE "asset" DROP CONSTRAINT "FK_3759b1db06e01ac14f271f3dc58"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f02f91612fce2b63a4e0c0b404"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_32585019a82e10b7b4a91aab89"`
    );
    await queryRunner.query(`DROP TABLE "asset_categories_category"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a153d17185521102e0fbf150b0"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_76655d1bd522557dd43db7c3eb"`
    );
    await queryRunner.query(`DROP TABLE "collection_categories_category"`);
    await queryRunner.query(`DROP TABLE "asset"`);
    await queryRunner.query(`DROP TABLE "collection"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
