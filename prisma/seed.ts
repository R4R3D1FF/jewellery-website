import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Gold Ring",
        imageUrl: "/images/gold-ring.png",
        price: 49999,
      },
      {
        name: "Silver Necklace",
        imageUrl: "/images/silver-necklace.png",
        price: 29999,
      },
    ],
  });
}

main()
  .then(() => console.log('Seeding complete.'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());