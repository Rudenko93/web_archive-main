import { useContext, useMemo, useState } from "react"
import { ThemeContext } from "services/context"
import type { TThemeState } from "services/context"
import { ETheme } from "enums"

export const useThemeContext = (): TThemeState | null => {
  return useContext(ThemeContext)
}

export const useTheme = () => {
  const [theme, setTheme] = useState<ETheme>(
    (localStorage.getItem("theme") as ETheme) || ETheme.Light
  )
  const handleChangeTheme = (theme: ETheme) => {
    localStorage.setItem("theme", theme)
    setTheme(theme)
  }

  return useMemo(() => {
    return {
      theme,
      onChangeTheme: handleChangeTheme,
    }
  }, [theme])
}
