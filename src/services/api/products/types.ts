export type TProducts = IProduct[]

export type IProductsParams = {
  page?: string
}

export interface IProduct {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
