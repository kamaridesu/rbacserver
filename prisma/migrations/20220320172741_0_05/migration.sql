/*
  Warnings:

  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the `PermissionSet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PermissionSet" DROP CONSTRAINT "PermissionSet_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "PermissionSet" DROP CONSTRAINT "PermissionSet_resourceId_fkey";

-- AlterTable
ALTER TABLE "Permission" ADD COLUMN     "resourceId" TEXT,
ADD COLUMN     "roleId" TEXT;

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("name");

-- DropTable
DROP TABLE "PermissionSet";

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Permission" ADD CONSTRAINT "Permission_resourceId_fkey" FOREIGN KEY ("resourceId") REFERENCES "Resource"("name") ON DELETE CASCADE ON UPDATE CASCADE;
