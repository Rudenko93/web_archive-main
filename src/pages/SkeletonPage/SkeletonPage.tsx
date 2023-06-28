import { ETypographyVariant, Typography } from "ui"
import "./SkeletonPage.scss"

export const SkeletonPage = () => {
  return (
    <section className="SkeletonPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Overlay
      </Typography>
    </section>
  )
}
