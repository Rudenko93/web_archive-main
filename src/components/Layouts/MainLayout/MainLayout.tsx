import { memo, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Menu } from "./MenuMain"
import { useScrollToTop, useThemeContext } from "hooks"
import { isNil } from "lodash"
import { ETheme } from "enums"
import clsx from "clsx"

export const MainLayout = memo(() => {
  const themeState = useThemeContext()
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light

  useEffect(() => {
    if (theme === ETheme.Dark) {
      document.body.classList.add("theme-dark")
    }
    return () => {
      document.body.classList.remove("theme-dark")
    }
  }, [theme])
  return (
    <div className={clsx("Layout", { "theme-dark": theme === ETheme.Dark })}>
      {useScrollToTop()}
      <Menu />
      <Outlet />
    </div>
  )
})
