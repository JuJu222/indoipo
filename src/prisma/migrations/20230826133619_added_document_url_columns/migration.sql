/*
  Warnings:

  - Added the required column `additional_information_url` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prospectus_summary_url` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prospectus_url` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "additional_information_url" TEXT NOT NULL,
ADD COLUMN     "prospectus_summary_url" TEXT NOT NULL,
ADD COLUMN     "prospectus_url" TEXT NOT NULL;
