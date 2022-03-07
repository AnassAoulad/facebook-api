import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {

  await prisma.post.create({
    data: {
      authorId: "1",
      message: "je suis batman"
    }
  })
  await prisma.user.create({
    data: {
      email: "bruce@wayne",
      password: "batpasword",
      Profile: {
        create: {
          firstName: 'Bruce',
          lastName: 'Wayne',
        }
      },
    }
  })

}

seed()
