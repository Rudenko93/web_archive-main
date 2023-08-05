import type { FC } from "react"
import ReactPaginate from "react-paginate"
import clsx from "clsx"
import { Icon } from "ui"
import { ETheme } from "enums"
import "./Pagination.scss"

type TProps = {
  className?: string
  forcePage?: number
  initialPage?: number
  marginPagesDisplayed?: number
  onChange: ({ selected }: { selected: number }) => void
  pageCount: number
  pageRangeDisplayed?: number
  theme?: ETheme
}

export const Pagination: FC<TProps> = ({
  className,
  forcePage,
  initialPage,
  marginPagesDisplayed = 3,
  onChange,
  pageCount,
  pageRangeDisplayed = 3,
  theme,
}) => {
  const isDark = theme === ETheme.Dark

  return (
    <ReactPaginate
      activeClassName="Pagination__active"
      breakClassName="Pagination__page-item"
      breakLinkClassName="Pagination__page-link"
      containerClassName={clsx(
        "Pagination",
        { Pagination__dark: isDark },
        className
      )}
      forcePage={forcePage}
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      nextClassName="Pagination__page-item"
      nextLinkClassName="Pagination__page-link"
      onPageChange={onChange}
      pageClassName="Pagination__page-item"
      pageCount={pageCount}
      pageLinkClassName="Pagination__page-link"
      pageRangeDisplayed={pageRangeDisplayed}
      previousClassName="Pagination__page-item"
      previousLinkClassName="Pagination__page-link"
      previousLabel={
        <>
          <Icon type="ArrowL" />
        </>
      }
      nextLabel={
        <>
          <Icon type="ArrowR" />
        </>
      }
      renderOnZeroPageCount={null}
    />
  )
}
