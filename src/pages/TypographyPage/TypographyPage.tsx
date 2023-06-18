import { ETypographyVariant, Typography } from "ui"
import "./TypographyPage.scss"

export const TypographyPage = () => {
  return (
    <section className="TypographyPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Typography
      </Typography>
    </section>
  )
}
