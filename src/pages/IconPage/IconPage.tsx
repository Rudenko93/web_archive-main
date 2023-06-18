import { ETypographyVariant, Typography, Icon } from "ui"
import "./IconPage.scss"

export const IconPage = () => {
  return (
    <section className="IconPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Icon
      </Typography>
      <Icon type="Svg" width={64} height={64} />
    </section>
  )
}
