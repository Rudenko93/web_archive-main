import { ReactComponent as Telegram } from "../../../public/icons/telegram.svg"
import { Button } from "../Button"

export type IconType = "Git" | "Telegram"

export const iconTypes: Map<string, any> = new Map([
  ["Telegram", <Telegram key="ArrowDownIcon" />],
])
