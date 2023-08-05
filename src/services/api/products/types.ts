export type TProducts = IProduct[]

export interface IProductsParams extends URLSearchParams {
  pageNumber?: string
}

export interface IProduct {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}
