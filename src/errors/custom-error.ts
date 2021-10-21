class CustomError extends Error {
  private statusCode: number | string
  constructor(message: string, statusCode: number | string) {
    super(message)
    this.statusCode = statusCode
  }
}

const createCustomError = (message: string, statusCode: number | string) => {
  return new CustomError(message, statusCode)
}

export default createCustomError
