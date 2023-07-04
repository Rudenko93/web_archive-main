import { useRef } from "react"

export const useLatest = <Value>(value: Value) => {
  const valueRef = useRef(value)

  valueRef.current = value

  return valueRef
}
