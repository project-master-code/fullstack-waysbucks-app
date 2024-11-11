/*
  Warnings:

  - You are about to drop the column `address` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `avatar` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `fullname` on the `profiles` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('WAITING_APPROVAL', 'SUCCESS', 'CANCELLED', 'ON_THE_WAY', 'COMPLETED');

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "address",
DROP COLUMN "avatar",
DROP COLUMN "fullname",
ADD COLUMN     "avatarUrl" TEXT,
ADD COLUMN     "fullName" TEXT;

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price_cents" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "toppings" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "toppings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_toppings" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "toppingId" INTEGER NOT NULL,

    CONSTRAINT "product_toppings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "customerName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "totalIncome" INTEGER NOT NULL,
    "status" "TransactionStatus" NOT NULL,
    "subtotal" INTEGER NOT NULL,
    "qrCodeImageUrl" TEXT,
    "transactionDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction_toppings" (
    "id" SERIAL NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "toppingId" INTEGER NOT NULL,

    CONSTRAINT "transaction_toppings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_items" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cart_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_item_toppings" (
    "id" SERIAL NOT NULL,
    "cartItemId" INTEGER NOT NULL,
    "toppingId" INTEGER NOT NULL,

    CONSTRAINT "cart_item_toppings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "toppings_name_key" ON "toppings"("name");

-- CreateIndex
CREATE INDEX "product_toppings_productId_toppingId_idx" ON "product_toppings"("productId", "toppingId");

-- CreateIndex
CREATE INDEX "transaction_toppings_transactionId_toppingId_idx" ON "transaction_toppings"("transactionId", "toppingId");

-- CreateIndex
CREATE INDEX "cart_item_toppings_cartItemId_toppingId_idx" ON "cart_item_toppings"("cartItemId", "toppingId");

-- AddForeignKey
ALTER TABLE "product_toppings" ADD CONSTRAINT "product_toppings_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_toppings" ADD CONSTRAINT "product_toppings_toppingId_fkey" FOREIGN KEY ("toppingId") REFERENCES "toppings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_toppings" ADD CONSTRAINT "transaction_toppings_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction_toppings" ADD CONSTRAINT "transaction_toppings_toppingId_fkey" FOREIGN KEY ("toppingId") REFERENCES "toppings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item_toppings" ADD CONSTRAINT "cart_item_toppings_cartItemId_fkey" FOREIGN KEY ("cartItemId") REFERENCES "cart_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item_toppings" ADD CONSTRAINT "cart_item_toppings_toppingId_fkey" FOREIGN KEY ("toppingId") REFERENCES "toppings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
