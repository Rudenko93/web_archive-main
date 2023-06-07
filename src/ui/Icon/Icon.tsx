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
  width = 64,
  height = 64,
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
