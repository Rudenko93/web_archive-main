import { DOMAttributes, FC } from "react"
import { IconType } from "./IconType"
import "./Icon.scss"

interface IIconProps extends DOMAttributes<HTMLSpanElement> {
  className?: string
  width?: number
  height?: number
  typeIcon: IconType
}

export const Icon: FC<IIconProps> = ({
  width = 64,
  height = 64,
  className,
  typeIcon,
}) => {
  return <div>Icon</div>
}
