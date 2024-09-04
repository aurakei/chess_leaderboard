import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const prismaLiderbaord = await prisma.users;

export async function GET() {
  const leaderboard =  prismaLiderbaord.findMany();
  return new NextResponse(JSON.stringify(leaderboard), { status: 200 });
}

export async function POST(request) {
  const body = await request.json();
  const newLeaderboardEntry =  prismaLiderbaord.create({
    data: body,
  });
  return new NextResponse(JSON.stringify(newLeaderboardEntry), { status: 201 });
}

