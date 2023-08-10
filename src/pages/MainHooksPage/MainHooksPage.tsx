import { FC } from "react"
import { ETypographyVariant, Typography } from "ui"

export const MainHooksPage: FC = () => {
  return (
    <div>
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Ui-kit
      </Typography>
      <div className="MainHooksPage__section">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        cupiditate iusto temporibus fuga illum qui veniam officia pariatur?
        Eligendi quaerat sit, quia numquam nesciunt eveniet optio tenetur ea
        consequuntur explicabo?
      </div>
    </div>
  )
}
