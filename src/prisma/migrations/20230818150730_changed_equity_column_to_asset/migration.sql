/*
  Warnings:

  - You are about to drop the column `equity` on the `financials` table. All the data in the column will be lost.
  - Added the required column `asset` to the `financials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "financials" DROP COLUMN "equity",
ADD COLUMN     "asset" DOUBLE PRECISION NOT NULL;
