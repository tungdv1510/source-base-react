export const getParamsForApiList = (params: any) => {
  let paramKey = "?"
  for (const key in params) {
    if (params[key] || params[key] === 0) {
      paramKey += `${key}=${params[key]}&`
    }
  }

  return paramKey
}

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
