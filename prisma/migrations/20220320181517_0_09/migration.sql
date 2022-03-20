/*
  Warnings:

  - A unique constraint covering the columns `[name,roleId,resourceId]` on the table `Permission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Permission_name_roleId_resourceId_key" ON "Permission"("name", "roleId", "resourceId");
