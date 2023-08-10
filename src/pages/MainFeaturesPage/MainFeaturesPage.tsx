import { FC } from "react"
import { ETypographyVariant, Typography } from "ui"

export const MainFeaturesPage: FC = () => {
  return (
    <div>
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Features
      </Typography>
      <div className="MainFeaturesPage__section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        cupiditate iusto temporibus fuga illum qui veniam officia pariatur?
        Eligendi quaerat sit, quia numquam nesciunt eveniet optio tenetur ea
        consequuntur explicabo?
      </div>
    </div>
  )
}
