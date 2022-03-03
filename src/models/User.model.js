import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createUser = (data) =>
  prisma.user.create({ data })

// display all user
export const findAll = () => prisma.user.findMany({})

// display user profile
export const findProfile = (id) => prisma.user.findMany({
  where: {
    userId: id,
  },
})

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
