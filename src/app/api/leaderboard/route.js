import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const matches = await prisma.matches.findMany();
    return new NextResponse(JSON.stringify(matches), { status: 200 });
  } catch (error) {
    console.error("Error fetching matches:", error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Basic validation (customize as needed)
    if (!body || typeof body !== "object") {
      return new NextResponse(
        JSON.stringify({ message: "Invalid request data" }),
        { status: 400 }
      );
    }

    const newMatch = await prisma.matches.create({
      data: body,
    });

    return new NextResponse(JSON.stringify(newMatch), { status: 201 });
  } catch (error) {
    console.error("Error creating match:", error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
