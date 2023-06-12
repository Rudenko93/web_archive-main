import clsx from "clsx"
import { ETypographyVariant, Typography } from "../../ui/Typography"
import { ETheme } from "../../enums/theme"
import { useSelect } from "./hooks"
import "./SelectPage.scss"
import { Select } from "../../ui/Select"

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
  const theme = ETheme.Light
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
        className={clsx("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        isMulti={false}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        theme={theme}
        value={selectedOption} // value={options.find(option => option.value === sorting)!}
      />
      <div className="SelectPage-value">
        <span>{JSON.stringify(selectedOption, null, 2)}</span>
      </div>
      <br />

      <Select
        className={clsx("SelectPage-Select", {
          "SelectPage-Select__active": isSelectOpened,
        })}
        isMulti={true}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        options={options}
        theme={theme}
        value={multipleSelectedOption}
      />
      <div className="SelectPage-value">
        <span>{JSON.stringify(selectedOption, null, 2)}</span>
      </div>
    </section>
  )
}
