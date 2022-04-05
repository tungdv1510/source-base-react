import { getParamsForApiList } from "../../utils/util"
import { get } from "../axiosClient"
import { GetSampleApiParams, GetSampleApiResponse } from "./type"

const sampleApiServices = {
  getAuction(params: GetSampleApiParams): Promise<GetSampleApiResponse> {
    return get(`sample${getParamsForApiList(params)}`)
  },
}

export default sampleApiServices
