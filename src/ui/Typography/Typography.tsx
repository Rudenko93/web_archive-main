import { ComponentProps, ElementType } from "react"
import { createElement, memo } from "react"
import { Color } from "./types"
import { ETextColor, ETypographyVariant } from "./enums"
import { TYPOGRAPHY_THEMES } from "./constants"
import "./Typography.scss"
import clsx from "clsx"

type TextOwnProps<E extends ElementType = ElementType> = {
  children?: React.ReactNode
  as: E
  color?: Color
  variant?: ETypographyVariant
  align?: "start" | "end" | "center"
}

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps>

export const Typography = memo(
  <E extends ElementType>({
    children,
    as,
    color = ETextColor.Dark,
    variant = ETypographyVariant.TextH1Bold,
    align = "center",
    ...otherProps
  }: TextProps<E>) => {
    const currentTheme = clsx(TYPOGRAPHY_THEMES({ color })[variant], {
      text_start: align === "start",
      text_end: align === "end",
    })

    return createElement(
      as,
      { className: currentTheme, ...otherProps },
      children
    )
  }
)
