/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `TodoItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TodoItem" DROP COLUMN "imageUrl";

-- AlterTable
ALTER TABLE "TodoList" ADD COLUMN     "imageUrl" TEXT;
