import { configureStore } from "@reduxjs/toolkit"
import auth from "./auth/slice"
import loading from "./loading/slice"
import toastMessage from "./toastMessages/slice"

export const store = configureStore({
  reducer: {
    auth,
    loading,
    toastMessage,
  },
})
