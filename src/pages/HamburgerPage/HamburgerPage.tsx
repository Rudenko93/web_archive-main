import { ETypographyVariant, Typography } from "ui"
import "./HamburgerPage.scss"

export const HamburgerPage = () => {
  return (
    <section className="HamburgerPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Hamburger
      </Typography>
    </section>
  )
}
