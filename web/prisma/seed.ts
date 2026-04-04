import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@testboard.com" },
    update: {
      name: "Admin",
      passwordHash: "admin123",
      role: "ADMIN",
    },
    create: {
      email: "admin@testboard.com",
      name: "Admin",
      passwordHash: "admin123",
      role: "ADMIN",
    },
  });

  console.log("✅ Admin user seeded:", admin);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
