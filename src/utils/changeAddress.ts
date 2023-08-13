import { EFeaturedRoutes, EUiRoutes } from "enums"
import { TSelectOption } from "ui/Select"

export const changeAddress = (
  options: typeof EUiRoutes | typeof EFeaturedRoutes,
  prefix: string
): TSelectOption[] => {
  return Object.keys(options).map((label) => {
    return {
      label,
      value: prefix + options[label as keyof typeof options],
    }
  })
}
