/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Message` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "updatedAt",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
