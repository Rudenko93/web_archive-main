import clsx from "clsx"
import { DOMAttributes } from "react"
import { Icon, IconType } from "../Icon"
import "./ButtonIcon.scss"

interface IButtonIconProps extends DOMAttributes<HTMLButtonElement> {
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent) => void
  className?: string
  typeIcon: IconType
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({
  typeIcon,
  onClick,
  isDisabled,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={clsx("ButtonIcon", className, {
        ButtonIcon_disabled: isDisabled,
      })}>
      <Icon type={typeIcon} />
    </button>
  )
}
