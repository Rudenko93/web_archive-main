import { ETypographyVariant, Typography } from "ui"
import "./OverlayPage.scss"

export const OverlayPage = () => {
  return (
    <section className="OverlayPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Overlay
      </Typography>
    </section>
  )
}
