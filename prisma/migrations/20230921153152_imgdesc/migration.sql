/*
  Warnings:

  - You are about to drop the `ProductDescription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductDescription" DROP CONSTRAINT "ProductDescription_titleSlug_fkey";

-- DropForeignKey
ALTER TABLE "ProductImage" DROP CONSTRAINT "ProductImage_titleSlug_fkey";

-- DropTable
DROP TABLE "ProductDescription";

-- DropTable
DROP TABLE "ProductImage";

-- CreateTable
CREATE TABLE "Productimage" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "titleSlug" TEXT NOT NULL,

    CONSTRAINT "Productimage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Productdescription" (
    "id" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "titleSlug" TEXT NOT NULL,

    CONSTRAINT "Productdescription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Productimage" ADD CONSTRAINT "Productimage_titleSlug_fkey" FOREIGN KEY ("titleSlug") REFERENCES "Product"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productdescription" ADD CONSTRAINT "Productdescription_titleSlug_fkey" FOREIGN KEY ("titleSlug") REFERENCES "Product"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
