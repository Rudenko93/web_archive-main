import type { FC } from "react"
import { Breadcrumbs, ETypographyVariant, Typography } from "ui"
import "./BreadcrumbsDetailPage.scss"

export const BreadcrumbsDetailPage: FC = () => {
  return (
    <section className="BreadcrumbsDetailPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Detail page
      </Typography>
      <Breadcrumbs />
    </section>
  )
}
