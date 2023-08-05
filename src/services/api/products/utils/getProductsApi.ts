import axios from "axios"
import isNil from "lodash/isNil"
import type { TProducts, IProductsParams } from "../types"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const getProductsApi = async (params?: IProductsParams) => {
  const searchParams = !isNil(params) ? `?_${new URLSearchParams(params)}` : ""
  const url = `${BASE_URL}/photos${searchParams}`
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  const response = await axios.get<TProducts>(url, config)
  return response.data
}
