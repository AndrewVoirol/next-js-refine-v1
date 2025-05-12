import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = (() => {
  if (process.env.NODE_ENV === 'production') {
    return new PrismaClient();
  } else {
    if (!globalForPrisma.prisma) {
      globalForPrisma.prisma = new PrismaClient({
        log: ['query'],
      });
    }
    return globalForPrisma.prisma;
  }
})();
