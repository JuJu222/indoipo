/*
  Warnings:

  - You are about to drop the column `kurs_date` on the `financials` table. All the data in the column will be lost.
  - You are about to drop the column `kurs_usd` on the `financials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "kurs_date" TIMESTAMP(3),
ADD COLUMN     "kurs_usd" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "financials" DROP COLUMN "kurs_date",
DROP COLUMN "kurs_usd";
