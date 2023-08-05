import React, { FC } from "react"
import { TProducts } from "services/api/products/types"
import "./ProductList.scss"

interface IProductList {
  products?: TProducts
}

export const ProductList: FC<IProductList> = ({ products }) => {
  return (
    <div className="ProductList">
      {products &&
        products.map((item) => {
          return (
            <div key={item.id + "Nav"}>
              <img
                alt={item.id + "alt"}
                className="PaginationProduct-Image"
                height={150}
                src={item.thumbnailUrl}
                width={150}
              />
            </div>
          )
        })}
    </div>
  )
}
