import clsx from "clsx"
import { DOMAttributes } from "react"
import { Icon, IconType } from "ui"
import "./ButtonIcon.scss"

interface IButtonIconProps extends DOMAttributes<HTMLButtonElement> {
  isActive?: boolean
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent) => void
  className?: string
  typeIcon: IconType
  width?: number
  height?: number
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({
  typeIcon,
  onClick,
  isDisabled,
  isActive = false,
  className,
  width,
  height,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={clsx("ButtonIcon", className, {
        ButtonIcon_active: isActive,
        ButtonIcon_disabled: isDisabled,
      })}>
      <Icon type={typeIcon} width={width} height={height} />
    </button>
  )
}
