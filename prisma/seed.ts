import { PrismaClient, User, Profile, Post } from '@prisma/client'

const prisma = new PrismaClient()
let date = new Date()

async function seed() {

  const user: User = {
    id: '1',
    email: "Bruce@wayne",
    password: "test",
    createdAt: date,
    updatedAt: date
  }
  const profile: Profile = {
    id: 1,
    firstName: "Bruce",
    lastName: "Wayne",
    userId: '1',
    createdAt: date,
    updatedAt: date
  }
  const post: Post = {
    id: 1,
    message: 'Je suis Batman',
    authorId: '1',
    createdAt: date,
    updatedAt: date
  }

  await prisma.user.create({ data: user })
  prisma.profile.create({ data: profile })
  prisma.post.create({ data: post })

}

seed()
