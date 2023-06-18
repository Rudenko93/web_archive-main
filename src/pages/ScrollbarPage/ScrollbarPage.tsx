import { ETypographyVariant, Typography } from "ui"
import "./ScrollbarPage.scss"

export const ScrollbarPage = () => {
  return (
    <section className="ScrollbarPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Modal
      </Typography>
    </section>
  )
}
