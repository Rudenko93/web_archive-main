import { memo } from "react"
import type { FC, MouseEvent } from "react"
import clsx from "clsx"
import "./Hamburger.scss"

enum EColor {
  BLACK = "black",
  WHITE = "white",
}

type TColor = "black" | "white"

type TProps = {
  className?: string
  color?: TColor
  isActive?: boolean
  onClick?: (event: MouseEvent) => void
}

const Component: FC<TProps> = ({
  className,
  color = EColor.BLACK,
  isActive = false,
  onClick,
}) => {
  return (
    <div className={clsx("Hamburger__wrapper", className)} onClick={onClick}>
      <div
        className={clsx("Burger", {
          Burger__black: color === EColor.BLACK,
          Burger__white: color === EColor.WHITE,
          Burger_active: isActive,
        })}
      />
    </div>
  )
}

export const Hamburger = memo(Component)
