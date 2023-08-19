/*
  Warnings:

  - Added the required column `is_audited` to the `financials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "financials" ADD COLUMN     "is_audited" BOOLEAN NOT NULL;
