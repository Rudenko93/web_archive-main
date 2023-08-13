import { components } from "react-select"
import type {
  DropdownIndicatorProps,
  GroupBase,
  MultiValueRemoveProps,
} from "react-select"
import clsx from "clsx"
import { Icon } from "ui"
import type { TSelectOption } from "./types"

export const StyledDropdownIndicator = (
  props: JSX.IntrinsicAttributes &
    DropdownIndicatorProps<TSelectOption, boolean, GroupBase<TSelectOption>>
) => {
  const menuIsOpen = props.selectProps.menuIsOpen
  return (
    <div className="Select-DropdownIndicator">
      <components.DropdownIndicator {...props}>
        <Icon
          className={clsx("Select-IconDropdownIndicator", {
            "Select-IconDropdownIndicator__open": menuIsOpen,
          })}
          type="ArrowDown"
          width={16}
          height={16}
        />
      </components.DropdownIndicator>
    </div>
  )
}

export const StyledDropdownIndicatorSearch = (
  props: JSX.IntrinsicAttributes &
    DropdownIndicatorProps<TSelectOption, boolean, GroupBase<TSelectOption>>
) => {
  const menuIsOpen = props.selectProps.menuIsOpen
  return (
    <div className="Select-DropdownIndicatorSearch">
      <components.DropdownIndicator {...props}>
        <Icon
          className={clsx("Select-IconDropdownIndicatorSearch", {
            "Select-IconDropdownIndicatorSearch__open": menuIsOpen,
          })}
          type="Search"
          width={16}
          height={16}
        />
      </components.DropdownIndicator>
    </div>
  )
}

export const StyledMultiValueRemove = (
  props: JSX.IntrinsicAttributes &
    MultiValueRemoveProps<TSelectOption[], boolean, GroupBase<TSelectOption[]>>
) => {
  return (
    <div className="Select-MultiValueRemove">
      <components.MultiValueRemove {...props}>
        <Icon type="Close" width={16} height={16} />
      </components.MultiValueRemove>
    </div>
  )
}
