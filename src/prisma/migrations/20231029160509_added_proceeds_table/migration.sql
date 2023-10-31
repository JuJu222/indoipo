-- CreateTable
CREATE TABLE "proceeds" (
    "id" SERIAL NOT NULL,
    "percentage" DECIMAL(3,2) NOT NULL,
    "use" TEXT NOT NULL,
    "company_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "proceeds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "proceeds" ADD CONSTRAINT "proceeds_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
