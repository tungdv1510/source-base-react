import { EMPTY_VALUE } from "../constants"

export const numberWithCommas = (value: number | string) => {
  return value || value === 0
    ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : EMPTY_VALUE
}
