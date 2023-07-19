import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";

import prisma from "@/app/libs/prismadb";

interface IParams {
  reservationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentuser = await getCurrentUser();

  if (!currentuser) {
    return NextResponse.error();
  }
  const { reservationId } = params;

  if (!reservationId || typeof reservationId !== "string") {
    throw new Error("invalid ID");
  }

  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentuser.id }, { listing: { userId: currentuser.id } }],
    },
  });
  return NextResponse.json(reservation);
}
