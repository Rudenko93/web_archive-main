import { useState, type FC, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { isNaN } from "lodash"
import { ETypographyVariant, Typography, Pagination } from "ui"
import { getProductsApi } from "services/api/products"
import { TProducts } from "services/api/products/types"
import "./PaginationPage.scss"
import { ProductList } from "components/ProductList"

type TStatus = "loading" | "success" | "error"

export const PaginationPage: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  let pageNumber: string
  if (!location.search || !isNaN(location.search.split("=")[1])) {
    pageNumber = location.search.split("=")[1]
  } else {
    pageNumber = "1"
  }

  const [currentPage, setCurrentPage] = useState(+pageNumber)
  const [products, setProducts] = useState<TProducts>()
  const [pageCount, setPageCount] = useState<number>(0)
  const [status, setStatus] = useState<TStatus>("loading")

  const render = (status: TStatus) => {
    switch (status) {
      case "loading":
        return <h1>Loading...</h1>
        break

      case "error":
        return <h1>Something went wrong</h1>
        break

      case "success":
        return <ProductList products={products} />
        break
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setStatus("loading")
        const response = await getProductsApi({ page: currentPage.toString() })
        setPageCount(
          Math.max(
            Math.ceil(response.headers["x-total-count"] / response.data.length)
          )
        )
        setProducts(response.data)
        setStatus("success")
      } catch (error) {
        console.error(error)
        setStatus("error")
      }
    }
    fetchProducts()
  }, [currentPage])

  useEffect(() => {
    navigate(`?_page=${currentPage}`, { replace: true })
  }, [currentPage, navigate])

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1)
  }

  return (
    <section className="PaginationPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Pagination
      </Typography>
      <Pagination
        initialPage={+currentPage - 1}
        pageCount={pageCount}
        onChange={handlePageChange}
      />
      {render(status)}
    </section>
  )
}
