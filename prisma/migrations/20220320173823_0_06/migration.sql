-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roleId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("name") ON DELETE CASCADE ON UPDATE CASCADE;
