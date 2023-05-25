import React, { memo } from "react"

import { MenuUi } from "./MenuUi"
import { Outlet } from "react-router-dom"
import { Menu } from "./MenuMain"

export const Layout = memo(() => {
  return (
    <div>
      <Menu />
      <MenuUi />
      <Outlet />
    </div>
  )
})
