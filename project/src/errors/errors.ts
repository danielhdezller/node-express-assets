/**
 * Define errors that are made by the application.
 *
 * @export
 * @class ApplicationError
 * @extends {Error}
 */
export class ApplicationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApplicationError";
  }
}

/**
 * Define errors that are made by the client.
 *
 * @export
 * @class ClientError
 * @extends {Error}
 */
export class ClientError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ClientError";
  }
}
