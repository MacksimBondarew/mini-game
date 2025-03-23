-- CreateEnum
CREATE TYPE "GameStatus" AS ENUM ('idle', 'inProgress', 'gameOver', 'gameOverDraw');

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "status" "GameStatus" NOT NULL,
    "winnerId" TEXT,
    "gameOverAt" TEXT,
    "field" JSONB,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GamePlayer" (
    "id" TEXT NOT NULL,
    "gameID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "index" INTEGER NOT NULL,

    CONSTRAINT "GamePlayer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "GamePlayer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamePlayer" ADD CONSTRAINT "GamePlayer_gameID_fkey" FOREIGN KEY ("gameID") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GamePlayer" ADD CONSTRAINT "GamePlayer_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
