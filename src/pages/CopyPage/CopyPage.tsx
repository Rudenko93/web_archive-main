import { ETypographyVariant, Typography } from "ui"
import "./CopyPage.scss"

export const CopyPage: React.FC = () => {
  return (
    <section className="CopyPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Tooltip
      </Typography>
    </section>
  )
}
