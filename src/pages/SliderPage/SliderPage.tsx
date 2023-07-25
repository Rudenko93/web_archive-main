import { ETypographyVariant, Typography } from "ui"
import "./SliderPage.scss"

export const SliderPage = () => {
  return (
    <section className="SliderPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Slider
      </Typography>
    </section>
  )
}
