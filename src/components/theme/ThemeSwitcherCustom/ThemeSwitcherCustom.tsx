import { SOCKET_SEND_THEME } from "constants/socket"
import { useContext } from "react"
import type { FC } from "react"
import clsx from "clsx"
import isNil from "lodash/isNil"

import { SocketContext } from "services/context"
import { ESwitcherVariant, Icon, SwitcherCustom } from "ui"

import { useThemeContext } from "hooks"
import { SWITCHER_THEMES } from "../constants"
import { ETheme } from "enums"

type TProps = {
  className?: string
  variant?: ESwitcherVariant
}

export const ThemeSwitcherCustom: FC<TProps> = ({
  className,
  variant = ESwitcherVariant.Default,
}) => {
  const currentTheme = SWITCHER_THEMES()[variant]
  const socket = useContext(SocketContext)
  const themeState = useThemeContext()
  const theme = !isNil(themeState) ? themeState.theme : ETheme.Light
  const isLight = theme !== ETheme.Dark

  const handleClick = (theme: ETheme) => () => {
    themeState?.onChangeTheme(theme)
    socket && socket.emit(SOCKET_SEND_THEME, theme)
  }

  const handleSwitchToDark = handleClick(ETheme.Dark)
  const handleSwitchToLight = handleClick(ETheme.Light)

  return (
    <SwitcherCustom
      className={clsx(currentTheme, className)}
      isChecked={isLight}
      variant={variant}>
      <div className="ThemeSwitcher-Controls">
        <Icon
          className={clsx("ThemeSwitcher-DisplayButton", {
            "ThemeSwitcher-DisplayButton__checked": isLight,
          })}
          type="Light"
          onClick={handleSwitchToLight}
          width={"50%"}
          height={38}
        />
        <Icon
          className={clsx("ThemeSwitcher-DisplayButton", {
            "ThemeSwitcher-DisplayButton__checked": !isLight,
          })}
          type="Dark"
          onClick={handleSwitchToDark}
          width={"50%"}
          height={38}
        />
      </div>
    </SwitcherCustom>
  )
}
