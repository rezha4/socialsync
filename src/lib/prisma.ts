import { PrismaClient } from "@prisma/client";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";

const prismaClientSingleton = () => {
  // edge compatible db connection
  // const neon = new Pool({
  //   connectionString: process.env.POSTGRES_PRISMA_URL,
  // });
  // const adapter = new PrismaNeon(neon);
  // return new PrismaClient({ adapter });
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production")
  globalThis.prismaGlobal = prisma;
