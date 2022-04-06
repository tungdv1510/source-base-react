import { AxiosResponse } from "axios"

export interface GetNonceParams {
  walletAddress: string
}

export interface GetNonceResponse extends AxiosResponse {
  data: any
}

export interface LoginResponse extends AxiosResponse {
  data: any
}
