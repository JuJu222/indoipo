/*
  Warnings:

  - Added the required column `e_ipo_url` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "e_ipo_url" TEXT NOT NULL;
