/*
  Warnings:

  - Added the required column `amount` to the `proceeds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "proceeds" ADD COLUMN     "amount" TEXT NOT NULL;
