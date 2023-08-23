/*
  Warnings:

  - You are about to drop the column `offered_shares` on the `companies` table. All the data in the column will be lost.
  - You are about to drop the column `total_shares` on the `companies` table. All the data in the column will be lost.
  - Added the required column `shares` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "offered_shares",
DROP COLUMN "total_shares",
ADD COLUMN     "shares" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "low_price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "high_price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "final_price" SET DATA TYPE DOUBLE PRECISION;
