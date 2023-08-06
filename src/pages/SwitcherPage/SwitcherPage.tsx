import { ETypographyVariant, Typography } from "ui"
import { ThemeSwitcher, ThemeSwitcherCustom } from "components"
import "./SwitcherPage.scss"

export const SwitcherPage = () => {
  return (
    <section className="SwitcherPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Switch
      </Typography>
      <Typography
        as="h2"
        variant={ETypographyVariant.TextH2Medium}
        align="start">
        Theme Switcher with library
      </Typography>
      <ThemeSwitcher />

      <br />
      <Typography
        as="h2"
        variant={ETypographyVariant.TextH2Medium}
        align="start">
        Theme Switcher without library
      </Typography>
      <ThemeSwitcherCustom />
    </section>
  )
}
