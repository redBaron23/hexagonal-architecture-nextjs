export class ActionError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}
