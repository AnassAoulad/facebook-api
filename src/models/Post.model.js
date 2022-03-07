import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const createPostDto = (authorId, message) => {
  prisma.post.create({
    data: {
      message,
      authorId
    }
  })
}

export const findOne = (id) => prisma.post.findUnique({
  where: {
    id: id,
  },
})

export const findAll = () => prisma.post.findMany({})

export const updatePostDto = (id, message) => prisma.post.update({
  where: {
    id: id
  },
  data: {
    message: message,
  }
})

export const deleteOne = (id) => prisma.post.delete({
  where: {
    id: id
  }
})
