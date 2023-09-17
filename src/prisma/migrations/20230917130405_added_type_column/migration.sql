/*
  Warnings:

  - Added the required column `type` to the `company_underwriters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company_underwriters" ADD COLUMN     "type" TEXT NOT NULL;
