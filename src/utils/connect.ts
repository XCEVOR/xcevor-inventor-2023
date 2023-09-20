import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const connPrisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default connPrisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = connPrisma;