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
      <SliderSimple
        arrows={true}
        dots={true}
        fade={true}
        images={sliderImages}
        infinite={true}
      />

      <SliderSyncing
        arrowsModal={true}
        focusOnSelect={true}
        images={sliderImages}
        swipeToSlide={true}
      />
    </section>
  )
}
