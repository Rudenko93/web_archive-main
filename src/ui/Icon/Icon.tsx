import { DOMAttributes, FC } from "react"
import { IconType, iconTypes } from "./IconType"
import clsx from "clsx"
import "./Icon.scss"
interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string
  width?: number | string
  height?: number
  type: IconType
  onClick?: () => void
}

const getIcon = (type: string) => iconTypes.get(type)

export const Icon: FC<IIconProps> = ({
  width = 28,
  height = 28,
  className,
  type,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ width: width, height: height }}
      className={clsx("Icon", className)}>
      {getIcon(type)}
    </div>
  )
}
