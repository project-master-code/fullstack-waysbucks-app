import { RegisterDTO } from '@dto/auth.dto';
import prisma from '@utils/prisma.client';

export const createUser = async (IRegister: RegisterDTO) => {
  return prisma.user.create({
    data: {
      email: IRegister.email,
      password: IRegister.password,
      username: IRegister.username,
      profile: {
        create: {
          fullName: IRegister.fullname,
        },
      },
    },
  });
};

export const findUsernameOrEmail = async (usernameOrEmail: string) => {
  return prisma.user.findFirst({
    where: {
      OR: [
        {
          email: usernameOrEmail,
        },
        {
          username: usernameOrEmail,
        },
      ],
    },
  });
};
// {admin only}
// getallusers
export const getAllUsers = async () => {
  return prisma.user.findMany({
    include: {
      profile: true,
    },
  });
};
