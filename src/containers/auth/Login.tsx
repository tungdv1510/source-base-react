import { useDispatch } from "react-redux"
import { ethers } from "ethers"
import { changeMessage } from "../../store/toastMessages/slice"
import { post } from "../../services/axiosClient"
import "./styles.scss"
import { GetNonceParams, GetNonceResponse, LoginResponse } from "./type"
import { setAccessToken } from "../../store/auth/slice"

const Login = () => {
  const dispatch = useDispatch()

  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      dispatch(
        changeMessage({
          message: "No MetaMask wallet. Please install it!",
          statusCode: 600,
        })
      )

      return
    }

    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    const walletAddress = await signer.getAddress()
    callGetNonce(walletAddress)
  }

  const callGetNonce = async (walletAddress: string) => {
    const params: GetNonceParams = {
      walletAddress,
    }

    const response: GetNonceResponse = await post(
      "sample-api-create-nonce",
      params
    )
    if (response.data?.data?.userId) {
      callRegister(walletAddress)
    } else {
      const signatureRes = await genSignature(response.data?.data?.nounce)
      if (signatureRes) {
        callLogin(walletAddress, signatureRes)
      }
    }
  }

  const callRegister = async (walletAddress: string) => {
    let params = {
      wallet_address: walletAddress,
    }

    const response = await post("sample-api-register", params)
    if (response.status) {
      callGetNonce(walletAddress)
    }
  }

  const genSignature = async (nonce: string) => {
    if (!(window as any).ethereum) {
      dispatch(
        changeMessage({
          message: "No MetaMask wallet. Please install it!",
          statusCode: 600,
        })
      )

      return
    }
    const provider = new ethers.providers.Web3Provider((window as any).ethereum)
    await provider.send("eth_requestAccounts", [])

    const signer = provider.getSigner()
    const signature = await signer.signMessage(nonce)

    return signature
  }

  const callLogin = async (walletAddress: string, signature: string) => {
    let params = {
      hashData: signature,
      walletAddress: walletAddress,
    }

    const response: LoginResponse = await post("sample-api-login", params)

    if (response.status) {
      dispatch(setAccessToken(response.data?.accessToken))

      localStorage.setItem("accessToken", response.data?.data?.token)
      localStorage.setItem("walletAddress", walletAddress)
    }
  }

  return (
    <div className="login-container">
      <button className="btn-login cursor-pointer" onClick={connectWallet}>
        <img
          src={require("../../assets/images/iconMetamask.png")}
          width={35}
          height={34}
        />
        Login with Meta Mask
      </button>
    </div>
  )
}

export default Login
