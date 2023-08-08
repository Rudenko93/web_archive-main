import type { FC } from "react"
import { Link } from "react-router-dom"
import { Breadcrumbs, ETypographyVariant, Typography } from "ui"
import "./BreadcrumbsPage.scss"

export const BreadcrumbsPage: FC = () => {
  return (
    <section className="BreadcrumbsPage">
      <Typography align="start" as="h1" variant={ETypographyVariant.TextH1Bold}>
        Breadcrumbs
      </Typography>
      <Breadcrumbs />
      <Link style={{ alignSelf: "start" }} to={`1`}>
        Go to detail page
      </Link>
    </section>
  )
}
