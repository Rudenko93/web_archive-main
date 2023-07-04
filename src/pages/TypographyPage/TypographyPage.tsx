import { ETypographyVariant, Typography } from "ui"
import "./TypographyPage.scss"

export const TypographyPage = () => {
  return (
    <section className="TypographyPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Typography
      </Typography>
      <Typography
        as="h2"
        variant={ETypographyVariant.TextH2Medium}
        align="start">
        Text
      </Typography>
      <Typography as="h5" variant={ETypographyVariant.TextH5Bold} align="start">
        Text
      </Typography>
      <Typography as="h5" variant={ETypographyVariant.TextH5Bold} align="start">
        Text
      </Typography>
    </section>
  )
}
