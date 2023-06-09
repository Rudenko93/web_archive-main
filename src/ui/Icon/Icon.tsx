import { DOMAttributes, FC } from "react"
import { IconType, iconTypes } from "./IconType"
import clsx from "clsx"
import "./Icon.scss"
interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string
  width?: number
  height?: number
  type: IconType
}

const getIcon = (type: string) => iconTypes.get(type)

export const Icon: FC<IIconProps> = ({
  width = 28,
  height = 28,
  className,
  type,
}) => {
  return (
    <div
      style={{ width: width, height: height }}
      className={clsx("Icon", className)}>
      {getIcon(type)}
    </div>
  )
}
