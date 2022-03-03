import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createPostDto = (message, authorId) => prisma.post.create({
  data: {
    message: message,
    authorId: authorId,
  }
})

export const findOne = (id) => prisma.post.findUnique({
  where: {
    id: id,
  },
})

export const findAll = () => prisma.post.findMany()

export const updatePostDto = (id, message, updatedAt) => prisma.post.update({
  where: {
    // authorId: authorId
    id: id
  },
  data: {
    message: message,
    // updatedAt?: updatedAt,
  }
})

export const deleteOne = (id) => prisma.post.delete({
  where: {
    id: id
  }
})

//! --------------------------------------------------------
// 1 import { PrismaClient } from '@prisma/client'
// 2 const prisma = new PrismaClient()
// 3
// → 4 export const createPostDto = (message, authorId) => prisma.post.create({
//     data: {
//       message: {
//         message: undefined,
//         authorId: undefined
//       },
//       ~~~~~~~~~~~~~~~~~~~~~
//       authorId: undefined,
//   +   Author: {
//   +     create?: UserCreateWithoutPostsInput | UserUncheckedCreateWithoutPostsInput,
//   +     connectOrCreate?: UserCreateOrConnectWithoutPostsInput,
//   +     connect?: UserWhereUniqueInput
//   +   },
//   ?   createdAt?: DateTime,
//   ?   updatedAt?: DateTime
//     }
//   })

// Argument message: Got invalid value
// {
// message: undefined,
// authorId: undefined
// }
// on prisma.createOnePost. Provided Json, expected String.
// Argument Author for data.Author is missing.

// Note: Lines with + are required, lines with ? are optional.
