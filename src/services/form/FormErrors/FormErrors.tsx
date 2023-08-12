import { useGetFormErrors } from "hooks/useGetFormErrors"
import type { FC } from "react"
import { Error } from "ui"

import type { TError } from "ui/Error/types"

type TProps = {
  errors: any
}

export const FormErrors: FC<TProps> = ({ errors }) => {
  const errorList = useGetFormErrors({ data: errors }) as TError[] | undefined
  return <Error errors={errorList} />
}
