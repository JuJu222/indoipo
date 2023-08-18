/*
  Warnings:

  - You are about to drop the column `shares` on the `financials` table. All the data in the column will be lost.
  - You are about to drop the column `total_shares` on the `financials` table. All the data in the column will be lost.
  - Added the required column `offered_shares` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_shares` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "offered_shares" BIGINT NOT NULL,
ADD COLUMN     "total_shares" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "financials" DROP COLUMN "shares",
DROP COLUMN "total_shares";
