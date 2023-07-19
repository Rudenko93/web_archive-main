import { ETypographyVariant, Typography } from "ui"
import { ThemeSwitcher, ThemeSwitcherCustom } from "components"
import "./SwitcherPage.scss"

export const SwitcherPage = () => {
  return (
    <section className="SwitcherPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Switch
      </Typography>
      <ThemeSwitcher />
      <br />
      <ThemeSwitcherCustom />
    </section>
  )
}
