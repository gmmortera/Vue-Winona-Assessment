class HttpError extends Error {
  readonly statusCode: number

  constructor(
    error: string,
    statusCode: number
  ) {
    super(error)
    this.statusCode = statusCode
  }
}

class UnauthorizedError extends HttpError {
  constructor(error: string = 'Autherization required') {
    super(error, 401)
  }
}

export function createHttpError(
  statusCode: number,
  message?: string,
): HttpError {
  const errorClasses: Record<number, new (message?: string) => HttpError> = {
    401: UnauthorizedError
  };

  return new HttpError(message || 'HTTP Error', statusCode);
}