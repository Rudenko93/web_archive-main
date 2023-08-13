import { FC } from "react"
import clsx from "clsx"
import isNil from "lodash/isNil"
import { ETheme } from "enums"
import { Select } from "ui"
import { useSearch, useThemeContext } from "hooks"
import "./Search.scss"

export const Search: FC = () => {
  const themeState = useThemeContext()
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light

  const { isSelectOpened, onBlur, onChange, onFocus, options, selectedOption } =
    useSearch()

  return (
    <div className="Search">
      <Select
        className={clsx("Search-Select", {
          "Search-Select__active": isSelectOpened,
        })}
        isMulti={false}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        theme={theme}
        options={options}
        value={selectedOption}
        placeholder="Search"
      />
    </div>
  )
}
