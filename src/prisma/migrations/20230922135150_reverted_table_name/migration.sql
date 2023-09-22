/*
  Warnings:

  - You are about to drop the `companies_underwriters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "companies_underwriters" DROP CONSTRAINT "companies_underwriters_company_id_fkey";

-- DropForeignKey
ALTER TABLE "companies_underwriters" DROP CONSTRAINT "companies_underwriters_underwriter_id_fkey";

-- DropTable
DROP TABLE "companies_underwriters";

-- CreateTable
CREATE TABLE "company_underwriters" (
    "id" SERIAL NOT NULL,
    "company_id" INTEGER NOT NULL,
    "underwriter_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_underwriters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "company_underwriters" ADD CONSTRAINT "company_underwriters_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_underwriters" ADD CONSTRAINT "company_underwriters_underwriter_id_fkey" FOREIGN KEY ("underwriter_id") REFERENCES "underwriters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
