import { FC } from "react"
import clsx from "clsx"
import isNil from "lodash/isNil"
import { ETheme } from "enums"
import { Autocomplete } from "ui"
import { usePosts, useThemeContext } from "hooks"
import "./Search.scss"

export const Search: FC = () => {
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
    <div className="Search">
      <Autocomplete
        className={clsx("Search-Select", {
          "Search-Select__active": isSelectOpened,
        })}
        isMulti={false}
        loadOptions={onLoadOptions}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        theme={theme}
        value={selectedOption}
        placeholder={"custom placeholder component"}
      />
    </div>
  )
}
