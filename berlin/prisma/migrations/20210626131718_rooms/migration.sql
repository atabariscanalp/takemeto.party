-- CreateEnum
CREATE TYPE "_Tag" AS ENUM ('pop', 'rap', 'jazz', 'classical', 'hip-hop', 'electronic', 'indie', 'k-pop', 'r&b', 'blues', 'metal', 'funk', 'latin', 'arab', 'acoustic', 'punk', 'rock', 'mix');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "current_room_id" TEXT;

-- CreateTable
CREATE TABLE "rooms" (
    "id" TEXT NOT NULL,
    "tag" "_Tag" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isPrivate" BOOLEAN NOT NULL,
    "numPeopleInside" INTEGER NOT NULL DEFAULT 1,
    "creator_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rooms.name_unique" ON "rooms"("name");

-- CreateIndex
CREATE UNIQUE INDEX "rooms.creator_id_unique" ON "rooms"("creator_id");

-- AddForeignKey
ALTER TABLE "rooms" ADD FOREIGN KEY ("creator_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
