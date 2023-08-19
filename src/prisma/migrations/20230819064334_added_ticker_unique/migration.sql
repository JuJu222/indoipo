/*
  Warnings:

  - A unique constraint covering the columns `[ticker]` on the table `companies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "companies_ticker_key" ON "companies"("ticker");
