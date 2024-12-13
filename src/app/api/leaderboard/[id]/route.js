import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, context) {
  try {
    const { id } = context.params || {};
    if (!id || isNaN(Number(id))) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid ID parameter" }),
        { status: 400 }
      );
    }

    const leaderboardEntry = await prisma.leaderboard.findUnique({
      where: { id: parseInt(id, 10) }, // Ensure id is an integer
    });

    if (leaderboardEntry) {
      return new NextResponse(JSON.stringify(leaderboardEntry), {
        status: 200,
      });
    } else {
      return new NextResponse(JSON.stringify({ message: "Entry not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error("Error fetching leaderboard entry:", error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function PUT(request, context) {
  try {
    const { id } = context.params || {};
    if (!id || isNaN(Number(id))) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid ID parameter" }),
        { status: 400 }
      );
    }

    const body = await request.json();

    // Validate the incoming data as needed
    if (!body || Object.keys(body).length === 0) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid request data" }),
        { status: 400 }
      );
    }

    const updatedEntry = await prisma.leaderboard.update({
      where: { id: parseInt(id, 10) }, // Ensure id is an integer
      data: body,
    });

    return new NextResponse(JSON.stringify(updatedEntry), { status: 200 });
  } catch (error) {
    console.error("Error updating leaderboard entry:", error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function DELETE(request, context) {
  try {
    const { id } = context.params || {};
    if (!id || isNaN(Number(id))) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid ID parameter" }),
        { status: 400 }
      );
    }

    await prisma.leaderboard.delete({
      where: { id: parseInt(id, 10) }, // Ensure id is an integer
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting leaderboard entry:", error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
