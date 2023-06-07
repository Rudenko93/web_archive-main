import cn from "clsx"
import { EColorType, ETypographyVariant } from "./enums"
import type { Color } from "./types"

type ThemesOptions = {
  color: Color
}

export const TYPOGRAPHY_THEMES = (options: ThemesOptions) => {
  const mainStyles = cn(`${EColorType.Text}-${options?.color}`)

  return {
    [ETypographyVariant.TextH1Bold]: cn("text text-h1 text-bold", mainStyles),
    [ETypographyVariant.TextH1Medium]: cn(
      "text text-h1 text-medium",
      mainStyles
    ),
    [ETypographyVariant.TextH2Medium]: cn(
      "text text-h2 text-medium",
      mainStyles
    ),
    [ETypographyVariant.TextH3Medium]: cn(
      "text text-h3 text-medium",
      mainStyles
    ),
    [ETypographyVariant.TextH4Medium]: cn(
      "text text-h4 text-medium",
      mainStyles
    ),
    [ETypographyVariant.TextH5Medium]: cn(
      "text text-h5 text-medium",
      mainStyles
    ),
    [ETypographyVariant.TextH5Bold]: cn("text text-h5 text-bold", mainStyles),
    [ETypographyVariant.TextH6Bold]: cn("text text-h6 text-bold", mainStyles),
    [ETypographyVariant.TextB2Bold]: cn("text text-b2 text-bold", mainStyles),
    [ETypographyVariant.TextB2Medium]: cn(
      "text text-b2 text-medium",
      mainStyles
    ),
    [ETypographyVariant.TextB2Regular]: cn(
      "text text-b2 text-regular",
      mainStyles
    ),
    [ETypographyVariant.TextB3Bold]: cn("text text-b3 text-bold", mainStyles),
    [ETypographyVariant.TextB3Medium]: cn(
      "text text-b3 text-medium",
      mainStyles
    ),
    [ETypographyVariant.TextB3Regular]: cn(
      "text text-b3 text-regular",
      mainStyles
    ),
    [ETypographyVariant.TextB4Bold]: cn("text text-b4 text-bold", mainStyles),
    [ETypographyVariant.TextB4Medium]: cn(
      "text text-b4 text-medium",
      mainStyles
    ),
    [ETypographyVariant.TextB4Regular]: cn(
      "text text-b4 text-regular",
      mainStyles
    ),
  }
}
