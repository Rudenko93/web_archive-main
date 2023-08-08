import { ETypographyVariant, Spinner, Typography } from "ui"
import "./SpinnerPage.scss"

export const SpinnerPage = () => {
  return (
    <section className="SpinnerPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Spinner
      </Typography>
      <Spinner />
    </section>
  )
}
