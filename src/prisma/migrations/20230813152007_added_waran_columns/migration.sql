-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ticker" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "net_profit" BIGINT NOT NULL,
    "shares" BIGINT NOT NULL,
    "total_shares" BIGINT NOT NULL,
    "debt" BIGINT NOT NULL,
    "equity" BIGINT NOT NULL,
    "low_price" INTEGER NOT NULL,
    "high_price" INTEGER NOT NULL,
    "final_price" INTEGER,
    "date_awal_start" TIMESTAMP(3),
    "date_awal_end" TIMESTAMP(3),
    "date_umum_start" TIMESTAMP(3),
    "date_umum_end" TIMESTAMP(3),
    "date_penjatahan" TIMESTAMP(3),
    "date_distribusi" TIMESTAMP(3),
    "date_ipo" TIMESTAMP(3),
    "waran_numerator" DOUBLE PRECISION,
    "waran_denominator" DOUBLE PRECISION,
    "exercise_price" DOUBLE PRECISION,
    "subsector_id" INTEGER,
    "underwriter_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sectors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subsectors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sector_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subsectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "underwriters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "underwriters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_subsector_id_fkey" FOREIGN KEY ("subsector_id") REFERENCES "subsectors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "companies" ADD CONSTRAINT "companies_underwriter_id_fkey" FOREIGN KEY ("underwriter_id") REFERENCES "underwriters"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subsectors" ADD CONSTRAINT "subsectors_sector_id_fkey" FOREIGN KEY ("sector_id") REFERENCES "sectors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
