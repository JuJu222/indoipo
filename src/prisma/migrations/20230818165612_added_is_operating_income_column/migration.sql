/*
  Warnings:

  - Added the required column `is_operating_income` to the `financials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "financials" ADD COLUMN     "is_operating_income" BOOLEAN NOT NULL;
