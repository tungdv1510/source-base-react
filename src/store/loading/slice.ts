import { GlobalStore } from "./../type"
import { createSlice } from "@reduxjs/toolkit"
import { LoadingStore } from "./type"

const initialState: LoadingStore = {
  isLoading: false,
}

const slice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true
    },

    hideLoading: (state) => {
      state.isLoading = false
    },
  },
})

// export action
export const { showLoading, hideLoading } = slice.actions

// export getters
export const selectIsLoading = (state: GlobalStore) => state.loading.isLoading

export default slice.reducer
