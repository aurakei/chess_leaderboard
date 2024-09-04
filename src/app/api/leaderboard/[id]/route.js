import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET({ params }) {
  const { id } = params;
  const leaderboardEntry = await prisma.leaderboard.findUnique({
    where: { id: Number(id) },
  });
  if (leaderboardEntry) {
    return new NextResponse(JSON.stringify(leaderboardEntry), { status: 200 });
  } else {
    return new NextResponse(JSON.stringify({ message: "Entry not found" }), {
      status: 404,
    });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();
  const updatedEntry = await prisma.leaderboard.update({
    where: { id: Number(id) },
    data: body,
  });
  return new NextResponse(JSON.stringify(updatedEntry), { status: 200 });
}

export async function DELETE({ params }) {
  const { id } = params;
  await prisma.leaderboard.delete({
    where: { id: Number(id) },
  });
  return new NextResponse(null, { status: 204 });
}
