import type { FC } from "react"
import { ETypographyVariant, Typography } from "ui"

export const PaginationPage: FC = () => {
  return (
    <section className="PaginationPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Pagination
      </Typography>
    </section>
  )
}
