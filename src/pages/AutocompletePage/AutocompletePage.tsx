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
    <section className="AutocompletePage">
      <Typography align="start" as="h1" variant={ETypographyVariant.TextH1Bold}>
        Autocomplete
      </Typography>
      <Typography
        align="start"
        as="span"
        variant={ETypographyVariant.TextB2Regular}>
        Please enter numbers from 1 to 10
      </Typography>
      <Autocomplete
        className={clsx("AutocompletePage-Select", {
          "AutocompletePage-Select__active": isSelectOpened,
        })}
        isMulti={false}
        loadOptions={onLoadOptions}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        theme={theme}
        value={selectedOption}
      />
      <div className="AutocompletePage__value">
        <span>{JSON.stringify(selectedOption, null, 2)}</span>
      </div>
    </section>
  )
}
