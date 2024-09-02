import { authMiddleware } from "../middlewares/auth-middleware";
import { baseActionClient } from "./base-action-client";

export const authActionClient = baseActionClient.use(authMiddleware);
