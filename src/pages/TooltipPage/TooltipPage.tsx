import type { FC } from "react"
import { ETypographyVariant, Typography } from "ui"
import "./TooltipPage.scss"

export const TooltipPage: FC = () => {
  return (
    <section className="TooltipPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Tooltip
      </Typography>
    </section>
  )
}
