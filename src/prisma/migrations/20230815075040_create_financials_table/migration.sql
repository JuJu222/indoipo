-- CreateTable
CREATE TABLE "financials" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "company_id" INTEGER,

    CONSTRAINT "financials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "financials" ADD CONSTRAINT "financials_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
