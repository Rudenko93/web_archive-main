import React from "react"
import type { FC } from "react"
import clsx from "clsx"
import isNil from "lodash/isNil"
import { ETheme } from "enums"
import { ETypographyVariant, Typography, Autocomplete } from "ui"
import { usePosts, useThemeContext } from "hooks"
import "./AutocompletePage.scss"

export const AutocompletePage: FC = () => {
  const themeState = useThemeContext()
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light
  const {
    isSelectOpened,
    onBlur,
    onChange,
    onFocus,
    onLoadOptions,
    selectedOption,
  } = usePosts()

  return (
    <section>
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Autocomplete
      </Typography>
      ET
    </section>
  )
}
