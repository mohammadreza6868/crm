import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser1659518296921 implements MigrationInterface {
    name = 'addUser1659518296921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_ea494d8562edd5a4bb96a9092ea"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "ferstname" nvarchar(255) NOT NULL, "lastname" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "phonenumber" nvarchar(255) NOT NULL, "username" nvarchar(255) NOT NULL, "password" nvarchar(255) NOT NULL, "customerId" int, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "request" DROP COLUMN "userid"`);
        await queryRunner.query(`ALTER TABLE "request" DROP COLUMN "customerId"`);
        await queryRunner.query(`ALTER TABLE "request" ADD "userId" int`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_38554ade327a061ba620eee948b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce"`);
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_38554ade327a061ba620eee948b"`);
        await queryRunner.query(`ALTER TABLE "request" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "request" ADD "customerId" int`);
        await queryRunner.query(`ALTER TABLE "request" ADD "userid" int NOT NULL`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_ea494d8562edd5a4bb96a9092ea" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
