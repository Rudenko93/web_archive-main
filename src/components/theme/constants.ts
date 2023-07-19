import clsx from "clsx"
import { ESwitcherVariant } from "ui"
import "./ThemeSwitcher.scss"

export const SWITCHER_THEMES = () => {
  return {
    [ESwitcherVariant.Default]: clsx("ThemeSwitcher"),
  }
}
