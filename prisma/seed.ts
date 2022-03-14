import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  await prisma.user.deleteMany({});
  await prisma.permission.deleteMany({});
  await prisma.resource.deleteMany({});
  await prisma.role.deleteMany({});
  await prisma.permissionSet.deleteMany({});

  let user = await prisma.user.create({
    data: {
      name: "Test"
    }
  })

  await prisma.post.create({
    data: {
      name: "First post",
      authorId: user.id
    }
  })

  await prisma.role.create({
    data: {
      name: "admin"
    }
  })

  await prisma.permission.createMany({
    data: [
      {
        name: "create"
      },
      {
        name: "read"
      },
      {
        name: "update"
      },
      {
        name: "delete"
      }
    ]
  })

  await prisma.resource.create({
    data: {
      name: "users",
      permissions: {
        create: [
          {
            createdBy: "admin",
            createdAt: new Date(),
            isallowed: true,
            permission: {
              connect: {
                name: "create"
              }
            }
          },
          {
            createdBy: "admin",
            createdAt: new Date(),
            isallowed: true,
            permission: {
              connect: {
                name: "read"
              }
            }
          }
        ]
      }
    }
  })

  
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
