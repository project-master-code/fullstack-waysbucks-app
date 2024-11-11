import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../src/utils/encryption';

const prisma = new PrismaClient();

async function main() {
  const superAdmin = await prisma.user.upsert({
    where: { email: 'mufid@admin.com' },
    update: {},
    create: {
      username: 'mufid',
      email: 'mufid@admin.com',
      password: await hashPassword('@admin123'),
      role: 'ADMIN',
      profile: {
        create: {
          fullName: 'Mufid',
          avatarUrl: 'https://wallpapercave.com/wp/wp12549694.jpg',
        },
      },
    },
  });

  console.log({ superAdmin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
