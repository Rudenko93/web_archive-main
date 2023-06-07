import { ComponentProps, ElementType } from "react"
import { createElement, memo } from "react"
import { Color } from "./types"
import { ETextColor, ETypographyVariant } from "./enums"
import { TYPOGRAPHY_THEMES } from "./constants"
import "./Typography.scss"

type TextOwnProps<E extends ElementType = ElementType> = {
  children?: React.ReactNode
  as: E
  color?: Color
  variant?: ETypographyVariant
}

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps>

export const Typography = memo(
  <E extends ElementType>({
    children,
    as,
    color = ETextColor.Dark,
    variant = ETypographyVariant.TextH1Bold,
    ...otherProps
  }: TextProps<E>) => {
    const currentTheme = TYPOGRAPHY_THEMES({ color })[variant]

    return createElement(
      as,
      { className: currentTheme, ...otherProps },
      children
    )
  }
)
