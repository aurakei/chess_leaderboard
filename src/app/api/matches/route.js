import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const matches = await prisma.matches.findMany();
  return new NextResponse(JSON.stringify(matches), { status: 200 });
}

export async function POST(request) {
  const body = await request.json();
  const newMatch = await prisma.matches.create({
    data: body,
  });
  return new NextResponse(JSON.stringify(newMatch), { status: 201 });
}
