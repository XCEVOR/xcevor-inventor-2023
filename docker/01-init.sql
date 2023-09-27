-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "img" TEXT,
    "price" DECIMAL(65,30) NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "options" JSONB[],
    "catSlug" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_catSlug_fkey" FOREIGN KEY ("catSlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;





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





