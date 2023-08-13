import { useState } from "react"
import type { OnChangeValue, SingleValue } from "react-select"
import { useNavigate } from "react-router-dom"
import isNil from "lodash/isNil"
import type { TSelectMultiType, TSelectOption } from "ui/Select"
import { EUiRoutes, EFeaturedRoutes } from "enums"
import { changeAddress } from "utils"

export const useSearch = () => {
  const navigate = useNavigate()

  const options = [
    ...changeAddress(EUiRoutes, "ui/"),
    ...changeAddress(EFeaturedRoutes, "features/"),
  ]

  const [isSelectOpened, setIsSelectOpened] = useState(false)

  const [selectedOption, setSelectedOption] =
    useState<SingleValue<TSelectOption>>(null)

  const handleChange = (
    selectedOption?: OnChangeValue<TSelectOption, TSelectMultiType>
  ) => {
    if (isNil(selectedOption)) return
    else {
      const selectedOptionSingle = selectedOption as TSelectOption
      setSelectedOption(selectedOptionSingle)
      navigate(selectedOptionSingle.value)
    }
  }

  const handleBlur = () => {
    setIsSelectOpened(false)
    setSelectedOption(null)
  }

  const handleFocus = () => {
    setIsSelectOpened(true)
  }

  return {
    isSelectOpened,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    options,
    selectedOption,
  }
}
