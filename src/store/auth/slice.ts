import { createSlice } from "@reduxjs/toolkit"
import { AuthStore } from "./type"

const initialState: AuthStore = {
  accessToken: "",
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    },

    clearAccessToken: (state) => {
      state.accessToken = ""
    },
  },
})

export const { setAccessToken, clearAccessToken } = slice.actions

export default slice.reducer
