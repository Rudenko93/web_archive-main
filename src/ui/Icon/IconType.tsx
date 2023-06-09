import { ReactComponent as Telegram } from "../assets/icons/telegram.svg"
import { ReactComponent as Git } from "../assets/icons/git.svg"
import { ReactComponent as Svg } from "../assets/icons/svg.svg"
import { ReactComponent as Button } from "../assets/icons/button.svg"

export type IconType = "Git" | "Telegram" | "Svg" | "Button"

export const iconTypes = new Map([
  ["Telegram", <Telegram />],
  ["Git", <Git />],
  ["Svg", <Svg />],
  ["Button", <Button />],
])
