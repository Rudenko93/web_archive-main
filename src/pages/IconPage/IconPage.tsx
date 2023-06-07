import { Icon } from "../../ui/Icon"
import { ETypographyVariant, Typography } from "../../ui/Typography"
import "./IconPage.scss"

export const IconPage = () => {
  return (
    <div>
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Icon
      </Typography>
      <Icon type="Svg" />
    </div>
  )
}
