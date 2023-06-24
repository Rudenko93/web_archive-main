import { useHydrated } from "hooks/useHydrated"
import type { FC, ReactNode } from "react"

type TProps = {
  children(): ReactNode
  fallback?: ReactNode
}

export const ClientOnly: FC<TProps> = ({ children, fallback = null }) => {
  return useHydrated() ? <>{children()}</> : <>{fallback}</>
}
