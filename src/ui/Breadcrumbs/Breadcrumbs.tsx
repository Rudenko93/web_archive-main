import { memo } from "react"
import type { FC } from "react"

import "./Breadcrumbs.scss"

const Component: FC = () => {
  return <nav className="Breadcrumbs"></nav>
}

export const Breadcrumbs = memo(Component)
