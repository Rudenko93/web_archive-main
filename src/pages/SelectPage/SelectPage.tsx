import clsx from "clsx"
import { isNil } from "lodash"
import { ETypographyVariant, Typography, Select } from "ui"
import { ETheme } from "enums"
import { useSelect } from "./hooks"
import { useThemeContext } from "hooks"
import "./SelectPage.scss"

type TSorting = {
  value: string
  label: string
}

type TProps = {
  onSortingChange?: (data: TSorting["value"]) => void
  sorting?: TSorting["value"]
}

export const SelectPage: React.FC<TProps> = ({
  onSortingChange,
  sorting = "price_asc",
}) => {
  const themeState = useThemeContext()
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light
  const {
    isSelectOpened,
    multipleSelectedOption,
    onBlur,
    onChange,
    onFocus,
    options,
    selectedOption,
  } = useSelect()

  return (
    <section className="SelectPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Select
      </Typography>

      <Select
        className={clsx("SelectPage__Select", {
          "SelectPage__Select-active": isSelectOpened,
        })}
        isMulti={false}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        theme={theme}
        value={selectedOption} // value={options.find(option => option.value === sorting)!}
      />
      <div className="SelectPage__value">
        <span>{JSON.stringify(selectedOption, null, 2)}</span>
      </div>
      <br />

      <Select
        className={clsx("SelectPage__Select", {
          "SelectPage__Select-active": isSelectOpened,
        })}
        isMulti={true}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        theme={theme}
        value={multipleSelectedOption}
      />
    </section>
  )
}
