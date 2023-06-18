import { ETypographyVariant, Typography } from "ui"
import "./CheckboxPage.scss"

export const CheckboxPage = () => {
  return (
    <section className="CheckboxPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Checkbox
      </Typography>
    </section>
  )
}
