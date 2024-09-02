import { UnauthenticatedError } from "@/domain/errors/auth";
import { auth } from "@/infrastructure/auth";
import { createMiddleware } from "next-safe-action";

export const authMiddleware = createMiddleware().define(async ({ next }) => {
  const session = await auth();

  if (!session || !session.user.id) {
    throw new UnauthenticatedError("Session not found or invalid!");
  }

  return next({ ctx: { userId: session.user.id, session } });
});
