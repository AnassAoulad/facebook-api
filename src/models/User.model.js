import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const findOne = (id) =>
  prisma.profile.findUnique({
    where: {
      userId: id
    }
  })

export const findAll = () => prisma.user.findMany({})

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

// authentification

// // display list of user post
// export const listPosts = (id) => await prisma.user.findAll({
//   where: {
//     authorId: id,
//   },
// })

// // update user profile
// export const updateProfile = ({ id, data }) => await prisma.user.update({
//   where: {
//     userId: id,
//   },
//   data,
// })

// // delete user profile
// export const deleteProfile = (id) => await prisma.user.delete({
//   where: {
//     authorId: id
//   }
// })
