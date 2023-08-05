import { useState, type FC, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { isNaN } from "lodash"
import { ETypographyVariant, Typography, Pagination } from "ui"
import { getProductsApi } from "services/api/products"
import { TProducts } from "services/api/products/types"
import "./PaginationPage.scss"

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsApi({ page: currentPage.toString() })
        setPageCount(
          Math.max(
            Math.ceil(response.headers["x-total-count"] / response.data.length)
          )
        )
        setProducts(response.data)
      } catch (error) {
        console.error(error)
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
      {/* {products?.map((item) => (
        <Product key={item.id} img={item.url} />
      ))} */}
    </section>
  )
}
