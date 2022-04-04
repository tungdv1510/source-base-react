export const getAccessToken = () => {
  return localStorage.getItem("accessToken")
}

// export const getRefreshToken = () => {
//   return localStorage.getItem("refreshToken")
// }

// export const getWalletAddress = () => {
//   return localStorage.getItem("walletAddress")
// }

export const getAuthorizationHeader = () => {
  return {
    Authorization: `Bearer ${getAccessToken()}`,
  }
}
