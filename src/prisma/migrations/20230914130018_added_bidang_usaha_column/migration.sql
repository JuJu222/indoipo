/*
  Warnings:

  - Added the required column `bidang_usaha` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "bidang_usaha" TEXT NOT NULL;
