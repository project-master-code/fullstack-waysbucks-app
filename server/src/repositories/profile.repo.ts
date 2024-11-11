import { ProfileDTO } from '@src/dto/profile.dto';
import prisma from '@utils/prisma.client';

export const updateProfileByUserId = async (
  userId: number,
  data: ProfileDTO
) => {
  return prisma.profile.update({
    where: { userId },
    data,
  });
};

export const getProfileByUserId = async (userId: number) => {
  return prisma.profile.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          email: true,
          username: true,
        },
      },
    },
  });
};
