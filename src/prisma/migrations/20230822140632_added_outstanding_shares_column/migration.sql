/*
  Warnings:

  - You are about to drop the column `shares` on the `companies` table. All the data in the column will be lost.
  - Added the required column `offered_shares` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outstanding_shares` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" DROP COLUMN "shares",
ADD COLUMN     "offered_shares" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "outstanding_shares" DOUBLE PRECISION NOT NULL;
