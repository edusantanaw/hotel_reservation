/*
  Warnings:

  - You are about to drop the column `localtion` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `roomCount` on the `Hotel` table. All the data in the column will be lost.
  - Added the required column `city` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "localtion",
DROP COLUMN "roomCount",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
