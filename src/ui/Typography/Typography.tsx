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
  classN?: string
}

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps>

export const Typography = memo(
  <E extends ElementType>({
    children,
    as,
    color = ETextColor.Dark,
    variant = ETypographyVariant.TextH1Bold,
    align = "start",
    classN,
    ...otherProps
  }: TextProps<E>) => {
    const currentTheme = clsx(TYPOGRAPHY_THEMES({ color })[variant], classN, {
      text_start: align === "start",
      text_end: align === "end",
      text_center: align === "center",
    })

    return createElement(
      as,
      { className: currentTheme, ...otherProps },
      children
    )
  }
)
