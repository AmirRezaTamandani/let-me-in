import { PrismaClient } from "@prisma/client";

//this is for production and nextjs hot reload that will create so many prisma instances
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
