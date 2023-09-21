/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "ProductImage" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "titleSlug" TEXT NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductDescription" (
    "id" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "titleSlug" TEXT NOT NULL,

    CONSTRAINT "ProductDescription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_title_key" ON "Product"("title");

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_titleSlug_fkey" FOREIGN KEY ("titleSlug") REFERENCES "Product"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductDescription" ADD CONSTRAINT "ProductDescription_titleSlug_fkey" FOREIGN KEY ("titleSlug") REFERENCES "Product"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
