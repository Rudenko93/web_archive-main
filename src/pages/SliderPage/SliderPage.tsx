import { ETypographyVariant, Typography } from "ui"
import "./SliderPage.scss"
import { SliderSimple, SliderSyncing } from "ui/Slider"
import { sliderImages } from "./data"

export const SliderPage = () => {
  return (
    <section className="SliderPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Slider
      </Typography>
      <Typography
        as="h2"
        variant={ETypographyVariant.TextH2Medium}
        align="start">
        Custom slider
      </Typography>

      <SliderSimple
        arrows={true}
        dots={true}
        fade={true}
        images={sliderImages}
        infinite={true}
      />
      <Typography
        as="h2"
        variant={ETypographyVariant.TextH2Medium}
        align="start">
        Slick Slider Syncing
      </Typography>

      <SliderSyncing
        arrowsModal={true}
        focusOnSelect={true}
        images={sliderImages}
        swipeToSlide={true}
      />
    </section>
  )
}
