import { ETypographyVariant, Typography } from "ui"

import "./SwitcherPage.scss"

export const SwitcherPage = () => {
  return (
    <section className="SwitcherPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Switch
      </Typography>
    </section>
  )
}
