import type { FC } from "react"
import { ButtonIcon } from "ui/ButtonIcon"
import type { IconType } from "ui/Icon/IconType"
import "./FormatButton.scss"

type TProps = {
  isActive?: boolean
  onToggle: (style: string) => void
  size?: string
  style: string
  typeIcon: IconType | string
}

export const FormatButton: FC<TProps> = ({
  isActive,
  onToggle,
  style,
  typeIcon,
}) => {
  return (
    <div
      className="FormatButton"
      onMouseDown={(event) => {
        event.preventDefault()
        onToggle?.(style)
      }}>
      <ButtonIcon isDisabled={isActive} typeIcon={typeIcon as IconType} />
    </div>
  )
}
