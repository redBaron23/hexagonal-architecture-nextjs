import { createMiddleware } from "next-safe-action";

export const loggingMiddleware = createMiddleware().define(
  async ({ next, clientInput, metadata }: any) => {
    console.log("LOGGING MIDDLEWARE");

    const result = await next({ ctx: undefined });

    console.log("Result ->", result);
    console.log("Client input ->", clientInput);
    console.log("Metadata ->", metadata);

    // And then return the result of the awaited action.
    return result;
  }
);
