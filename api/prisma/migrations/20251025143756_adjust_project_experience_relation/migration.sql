/*
  Warnings:

  - You are about to drop the column `experiencesId` on the `project` table. All the data in the column will be lost.
  - Added the required column `image` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."project" DROP CONSTRAINT "project_experiencesId_fkey";

-- AlterTable
ALTER TABLE "project" DROP COLUMN "experiencesId",
ADD COLUMN     "experienceId" INTEGER,
ADD COLUMN     "fullDescription" TEXT,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "type" TEXT;

-- AddForeignKey
ALTER TABLE "project" ADD CONSTRAINT "project_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "experience"("id") ON DELETE SET NULL ON UPDATE CASCADE;
