import clsx from "clsx"
import { DOMAttributes } from "react"
import "./Button.scss"

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  isDisabled?: boolean
  typeButton?: "button" | "submit" | "reset"
  onClick?: (event: React.MouseEvent) => void
  className?: string
}

export const Button: React.FC<IButtonProps> = ({
  isDisabled = false,
  typeButton = "button",
  className,
  onClick,
  children,
}) => {
  return (
    <button
      type={typeButton}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx("Button", className, {
        Button_disabled: isDisabled,
      })}>
      <span>{children}</span>
    </button>
  )
}
