import { ReactComponent as Telegram } from "../assets/icons/telegram.svg"
import { ReactComponent as Git } from "../assets/icons/git.svg"
import { ReactComponent as Svg } from "../assets/icons/svg.svg"
import { ReactComponent as Button } from "../assets/icons/button.svg"
import { ReactComponent as ArrowRight } from "../assets/icons/arrow-right.svg"
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg"
import { ReactComponent as Close } from "../assets/icons/close.svg"
import { ReactComponent as Checkbox } from "../assets/icons/checkbox.svg"
import { ReactComponent as Spinner } from "../assets/icons/spinner.svg"

export type IconType =
  | "Git"
  | "Telegram"
  | "Svg"
  | "Button"
  | "ArrowRight"
  | "ArrowDown"
  | "Close"
  | "Checkbox"
  | "Spinner"

export const iconTypes = new Map([
  ["Telegram", <Telegram />],
  ["Git", <Git />],
  ["Svg", <Svg />],
  ["Button", <Button />],
  ["ArrowRight", <ArrowRight />],
  ["ArrowDown", <ArrowDown />],
  ["Close", <Close />],
  ["Checkbox", <Checkbox />],
  ["Spinner", <Spinner />],
])
