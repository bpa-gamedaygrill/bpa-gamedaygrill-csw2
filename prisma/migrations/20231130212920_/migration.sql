-- CreateTable
CREATE TABLE "Event" (
    "id" STRING NOT NULL,
    "imageUrl" STRING NOT NULL,
    "eventName" STRING NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventDescription" STRING NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
