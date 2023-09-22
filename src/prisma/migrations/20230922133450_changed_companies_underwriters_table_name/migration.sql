/*
  Warnings:

  - You are about to drop the `company_underwriters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "company_underwriters" DROP CONSTRAINT "company_underwriters_company_id_fkey";

-- DropForeignKey
ALTER TABLE "company_underwriters" DROP CONSTRAINT "company_underwriters_underwriter_id_fkey";

-- DropTable
DROP TABLE "company_underwriters";

-- CreateTable
CREATE TABLE "companies_underwriters" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "underwriter_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_underwriters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "companies_underwriters" ADD CONSTRAINT "companies_underwriters_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies_underwriters" ADD CONSTRAINT "companies_underwriters_underwriter_id_fkey" FOREIGN KEY ("underwriter_id") REFERENCES "underwriters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
