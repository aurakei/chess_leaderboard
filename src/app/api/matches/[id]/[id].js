import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET({ params }) {
  const { id } = params;
  const match = await prisma.matches.findUnique({
    where: { id: Number(id) },
  });
  if (match) {
    return new NextResponse(JSON.stringify(match), { status: 200 });
  } else {
    return new NextResponse(JSON.stringify({ message: 'Match not found' }), { status: 404 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();
  const updatedMatch = await prisma.matches.update({
    where: { id: Number(id) },
    data: body,
  });
  return new NextResponse(JSON.stringify(updatedMatch), { status: 200 });
}

export async function DELETE({ params }) {
  const { id } = params;
  await prisma.matches.delete({
    where: { id: Number(id) },
  });
  return new NextResponse(null, { status: 204 });
}
