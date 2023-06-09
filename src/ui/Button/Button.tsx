import clsx from "clsx"
import { DOMAttributes } from "react"
import "./Button.scss"
import { Icon, IconType } from "../Icon"

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  isDisabled?: boolean
  typeButton?: "button" | "submit" | "reset"
  onClick?: (event: React.MouseEvent) => void
  className?: string
  typeIcon?: IconType
  iconWidth?: number
  iconHeight?: number
}

export const Button: React.FC<IButtonProps> = ({
  isDisabled = false,
  typeButton = "button",
  className,
  onClick,
  children,
  typeIcon,
  iconWidth,
  iconHeight,
}) => {
  return (
    <button
      type={typeButton}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx("Button", className, {
        Button_disabled: isDisabled,
      })}>
      {typeIcon && (
        <Icon type="ArrowRight" width={iconWidth} height={iconHeight} />
      )}
      <span className={clsx({ textWithIcon: typeIcon })}>{children}</span>
    </button>
  )
}
