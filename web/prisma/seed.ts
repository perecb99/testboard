import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@testboard.com" },
    update: {
      name: "Admin",
      passwordHash: hashedPassword,
      role: "ADMIN",
    },
    create: {
      email: "admin@testboard.com",
      name: "Admin",
      passwordHash: hashedPassword,
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
