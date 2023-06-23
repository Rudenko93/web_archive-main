import { ETypographyVariant, Typography } from "ui"

import "./FormPage.scss"

export const FormPage: React.FC = () => {
  return (
    <section className="FormPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Form
      </Typography>
    </section>
  )
}
