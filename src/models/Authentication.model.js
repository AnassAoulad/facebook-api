import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const registerDto = ({ email, password }) =>
  prisma.user.create({
    data: {
      email,
      password,
      Profile: {
        create: {
          firstName: '',
          lastName: '',
        }
      },
    }
  })

export const findByCredentials = ({ email, password }) =>
  prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });
