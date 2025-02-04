// import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

// const prisma = globalThis.prisma ?? new PrismaClient({
//   log: ["query", "info", "warn", "error"], // Enables debugging logs
//   errorFormat: "pretty",
//   datasources: {
//     db: {
//       url: process.env.DATABASE_URL + "?pgbouncer=false", // 👈 Disables query caching
//     },
//   },
// });

// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = prisma;
// }

// export default prisma;



import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
