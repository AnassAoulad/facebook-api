import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const findProfile = (id) =>
  prisma.profile.findUnique({
    where: {
      userId: id
    }
  })

export const updateOne = (id, firstName, lastName) =>
  prisma.profile.update({
    where: {
      userId: id
    },
    data: {
      firstName: firstName,
      lastName: lastName
    }
  })

export const deleteOne = (id) => prisma.user.delete({
  where: {
    id: id
  }
})
