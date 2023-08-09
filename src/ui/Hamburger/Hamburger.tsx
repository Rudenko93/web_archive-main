import { memo } from "react"
import type { FC, MouseEvent } from "react"
import clsx from "clsx"
import "./Hamburger.scss"

type TProps = {
  className?: string
  isActive?: boolean
  onClick?: (event: MouseEvent) => void
}

const Component: FC<TProps> = ({
  className,

  isActive = false,
  onClick,
}) => {
  return (
    <div className={clsx("Hamburger__wrapper", className)} onClick={onClick}>
      <div
        className={clsx("Burger", {
          Burger_active: isActive,
        })}
      />
    </div>
  )
}

export const Hamburger = memo(Component)
