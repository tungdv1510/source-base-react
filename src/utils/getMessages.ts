export const getMessages = (statusCode: number) => {
  switch (statusCode) {
    case 200:
      return "success"
    default:
      return "error"
  }
}
