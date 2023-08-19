/*
  Warnings:

  - You are about to drop the column `debt` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `equity` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `net_income` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `shares` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `total_shares` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `underwriter_id` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `financials` table. All the data in the column will be lost.
  - Added the required column `date_end` to the `financials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `debt` to the `financials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equity` to the `financials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interval` to the `financials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `net_income` to the `financials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shares` to the `financials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_shares` to the `financials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "companies" DROP CONSTRAINT "companies_underwriter_id_fkey";

-- AlterTable
ALTER TABLE "companies" DROP COLUMN "debt",
DROP COLUMN "equity",
DROP COLUMN "net_income",
DROP COLUMN "shares",
DROP COLUMN "total_shares",
DROP COLUMN "underwriter_id";

-- AlterTable
ALTER TABLE "financials" DROP COLUMN "name",
ADD COLUMN     "date_end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "debt" BIGINT NOT NULL,
ADD COLUMN     "equity" BIGINT NOT NULL,
ADD COLUMN     "interval" BIGINT NOT NULL,
ADD COLUMN     "net_income" BIGINT NOT NULL,
ADD COLUMN     "shares" BIGINT NOT NULL,
ADD COLUMN     "total_shares" BIGINT NOT NULL;

-- CreateTable
CREATE TABLE "company_underwriters" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "underwriter_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_underwriters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company_underwriters" ADD CONSTRAINT "company_underwriters_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_underwriters" ADD CONSTRAINT "company_underwriters_underwriter_id_fkey" FOREIGN KEY ("underwriter_id") REFERENCES "underwriters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
