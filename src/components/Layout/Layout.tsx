import React, { memo } from "react"
import { Menu } from "./Menu"
import { Outlet } from "react-router-dom"

export const Layout = memo(() => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
})
