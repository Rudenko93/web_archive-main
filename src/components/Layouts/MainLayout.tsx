import React, { memo } from "react"

import { Outlet } from "react-router-dom"
import { Menu } from "./MenuMain"

export const MainLayout = memo(() => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
})
