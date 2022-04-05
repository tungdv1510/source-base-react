export const getMessages = (statusCode: number) => {
  switch (statusCode) {
    case 200:
      return "success"
    default:
      return "error"
  }
}

export const getMessageType = (statusCode: number) => {
  switch (statusCode) {
    case 200:
      return "success"
    default:
      return "error"
  }
}
