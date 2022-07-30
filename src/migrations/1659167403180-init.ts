import {MigrationInterface, QueryRunner} from "typeorm";

export class init1659167403180 implements MigrationInterface {
    name = 'init1659167403180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "respons" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, "requestId" int, CONSTRAINT "PK_e12e253baa6378e392f2362cbbd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "request" ("id" int NOT NULL IDENTITY(1,1), "titele" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, "createdatatime" datetime NOT NULL, "modifydatetime" datetime NOT NULL, "userid" int NOT NULL, "status" int NOT NULL, "customerId" int, CONSTRAINT "PK_167d324701e6867f189aed52e18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "respons" ADD CONSTRAINT "FK_6392e450225207948a8c80b9002" FOREIGN KEY ("requestId") REFERENCES "request"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "request" ADD CONSTRAINT "FK_ea494d8562edd5a4bb96a9092ea" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "request" DROP CONSTRAINT "FK_ea494d8562edd5a4bb96a9092ea"`);
        await queryRunner.query(`ALTER TABLE "respons" DROP CONSTRAINT "FK_6392e450225207948a8c80b9002"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP TABLE "request"`);
        await queryRunner.query(`DROP TABLE "respons"`);
    }

}
