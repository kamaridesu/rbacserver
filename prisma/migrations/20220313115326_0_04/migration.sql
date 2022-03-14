/*
  Warnings:

  - The primary key for the `Permission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Permission` table. All the data in the column will be lost.
  - The primary key for the `Resource` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Resource` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PermissionSet" DROP CONSTRAINT "PermissionSet_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "PermissionSet" DROP CONSTRAINT "PermissionSet_resourceId_fkey";

-- AlterTable
ALTER TABLE "Permission" DROP CONSTRAINT "Permission_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Permission_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Resource_pkey" PRIMARY KEY ("name");

-- AddForeignKey
ALTER TABLE "PermissionSet" ADD CONSTRAINT "PermissionSet_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionSet" ADD CONSTRAINT "PermissionSet_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("name") ON DELETE CASCADE ON UPDATE CASCADE;
