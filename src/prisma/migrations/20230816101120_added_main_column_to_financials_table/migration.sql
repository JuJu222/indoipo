/*
  Warnings:

  - Added the required column `main` to the `financials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "financials" ADD COLUMN     "main" BOOLEAN NOT NULL;
