/*
  Warnings:

  - You are about to drop the column `is_audited` on the `financials` table. All the data in the column will be lost.
  - You are about to drop the column `is_operating_income` on the `financials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "financials" DROP COLUMN "is_audited",
DROP COLUMN "is_operating_income";
