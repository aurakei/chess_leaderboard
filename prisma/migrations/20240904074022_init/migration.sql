-- CreateEnum
CREATE TYPE "Result" AS ENUM ('WHITE_WIN', 'BLACK_WIN', 'DRAW');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leaderboard" (
    "id" SERIAL NOT NULL,
    "playerid" INTEGER NOT NULL,
    "ranking" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,
    "matchesPlayed" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL,
    "losses" INTEGER NOT NULL,
    "draws" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Leaderboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Matches" (
    "id" SERIAL NOT NULL,
    "whitePlayerId" INTEGER NOT NULL,
    "blackPlayerId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "result" "Result" NOT NULL,
    "finalBoardState" TEXT NOT NULL,

    CONSTRAINT "Matches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Leaderboard_playerid_key" ON "Leaderboard"("playerid");

-- CreateIndex
CREATE INDEX "Matches_whitePlayerId_blackPlayerId_idx" ON "Matches"("whitePlayerId", "blackPlayerId");

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_whitePlayerId_fkey" FOREIGN KEY ("whitePlayerId") REFERENCES "Leaderboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matches" ADD CONSTRAINT "Matches_blackPlayerId_fkey" FOREIGN KEY ("blackPlayerId") REFERENCES "Leaderboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
