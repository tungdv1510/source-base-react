import { createSlice } from "@reduxjs/toolkit"
import { GlobalStore } from "../type"
import { ToastMessageStore } from "./type"

const initialState: ToastMessageStore = {
  message: "",
  statusCode: null,
}

const slice = createSlice({
  name: "toastMessage",
  initialState,
  reducers: {
    changeMessage: (state, action) => {
      state.message = action.payload.message
      state.statusCode = action.payload.statusCode
    },

    clearMessage: (state) => {
      state.message = ""
      state.statusCode = null
    },
  },
})

export const { changeMessage, clearMessage } = slice.actions
export const selectToastMessage = (state: GlobalStore) => state.toastMessage

export default slice.reducer
