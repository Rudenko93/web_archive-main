import { ETypographyVariant, Typography } from "ui"
import "./DocumentViewerPage.scss"

export const DocumentViewerPage = () => {
  return (
    <section className="DocumentViewerPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Document viewer
      </Typography>
    </section>
  )
}
