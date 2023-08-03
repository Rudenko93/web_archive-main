import React from "react"
import type { FC } from "react"
import { ETypographyVariant, Typography } from "ui"

export const BreadcrumbsPage: FC = () => {
  return (
    <section className="BreadcrumbsPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Breadcrumbs
      </Typography>
    </section>
  )
}
