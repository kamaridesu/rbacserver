import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  await prisma.user.deleteMany({});
  await prisma.permission.deleteMany({});
  await prisma.resource.deleteMany({});
  await prisma.role.deleteMany({});
  await prisma.post.deleteMany({});

  let admin = await prisma.role.create({
    data: {
      name: "admin"
    }
  })

  let userRole = await prisma.role.create({
    data: {
      name: "user"
    }
  })

   let users = await prisma.resource.create({
    data: {
      name: "users",
    }
  })
  

  await prisma.permission.createMany({
    data: [
      {
        name: "create:users",
        resourceId: users.name,
        roleId: admin.name
      },
      {
        name: "read:users",
        resourceId: users.name,
        roleId: admin.name
      },
      {
        name: "update:users",
        resourceId: users.name,
        roleId: admin.name
      },
      {
        name: "delete:users",
        resourceId: users.name,
        roleId: admin.name
      },
      {
        name: "create:users",
        resourceId: users.name,
        roleId: userRole.name
      },
      {
        name: "read:users",
        resourceId: users.name,
        roleId: userRole.name
      },
      {
        name: "update:users",
        resourceId: users.name,
        roleId: userRole.name
      },
      {
        name: "delete:users",
        resourceId: users.name,
        roleId: userRole.name
      }
    ]
  })

  let user = await prisma.user.create({
    data: {
      name: "Test",
      roleId: admin.name
    }
  })

  await prisma.post.create({
    data: {
      name: "First post",
      authorId: user.id
    }
  })

  
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    //await prisma.$disconnect();
  });
