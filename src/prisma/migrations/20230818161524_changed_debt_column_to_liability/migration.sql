/*
  Warnings:

  - You are about to drop the column `debt` on the `financials` table. All the data in the column will be lost.
  - Added the required column `liability` to the `financials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "financials" DROP COLUMN "debt",
ADD COLUMN     "liability" DOUBLE PRECISION NOT NULL;
