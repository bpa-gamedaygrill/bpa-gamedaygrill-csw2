/*
  Warnings:

  - You are about to drop the `DeliveryAddress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PurchaseItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `totalCost` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DeliveryAddress" DROP CONSTRAINT "DeliveryAddress_userId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_menuItemId_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseItem" DROP CONSTRAINT "PurchaseItem_purchaseId_fkey";

-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN     "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "Purchase" ADD COLUMN     "totalCost" STRING NOT NULL;
ALTER TABLE "Purchase" ALTER COLUMN "userId" DROP NOT NULL;

-- DropTable
DROP TABLE "DeliveryAddress";

-- DropTable
DROP TABLE "PurchaseItem";
