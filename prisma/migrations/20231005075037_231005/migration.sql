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

-- CreateTable
CREATE TABLE "AboutMe" (
    "id" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "detail" TEXT NOT NULL,

    CONSTRAINT "AboutMe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutSkill" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bgcolor" TEXT,
    "completed" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "AboutSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutInterest" (
    "id" TEXT NOT NULL,
    "priority" DECIMAL(65,30) NOT NULL,
    "title" TEXT NOT NULL,
    "logo" TEXT,

    CONSTRAINT "AboutInterest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeData" (
    "id" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "detail" TEXT,

    CONSTRAINT "ResumeData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResumeDataDescription" (
    "id" TEXT NOT NULL,
    "data" TEXT,
    "location" TEXT,
    "thesis" BOOLEAN NOT NULL,
    "desc" TEXT NOT NULL,
    "titleSlug" TEXT NOT NULL,

    CONSTRAINT "ResumeDataDescription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_title_key" ON "Product"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ResumeData_title_key" ON "ResumeData"("title");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_catSlug_fkey" FOREIGN KEY ("catSlug") REFERENCES "Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productimage" ADD CONSTRAINT "Productimage_titleSlug_fkey" FOREIGN KEY ("titleSlug") REFERENCES "Product"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productdescription" ADD CONSTRAINT "Productdescription_titleSlug_fkey" FOREIGN KEY ("titleSlug") REFERENCES "Product"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResumeDataDescription" ADD CONSTRAINT "ResumeDataDescription_titleSlug_fkey" FOREIGN KEY ("titleSlug") REFERENCES "ResumeData"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
