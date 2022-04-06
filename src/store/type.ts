import { AuthStore } from "./auth/type"
import { LoadingStore } from "./loading/type"
import { ToastMessageStore } from "./toastMessages/type"

export interface GlobalStore {
  auth: AuthStore
  loading: LoadingStore
  toastMessage: ToastMessageStore
}
