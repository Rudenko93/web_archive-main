import { NavLink } from "react-router-dom"
import { ThemeSwitcherCustom } from "components"
import { EMainRoutes } from "enums"
import { toCapitalize } from "utils"
import { Icon } from "ui"
import "./Menu.scss"

const navList = [
  [EMainRoutes.Ui, "ui/avatar"],
  [EMainRoutes.Features, "features/accordion"],
  [EMainRoutes.Hooks, "hooks"],
  [EMainRoutes.About, "about"],
]

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-left">
        <input type="text" placeholder="Search" />
        <NavLink to={"/"} key={"/"} className={"logo"}>
          <Icon type="Web" />
          Web Archive
        </NavLink>
        <ThemeSwitcherCustom />
      </div>
      <div className="menu-list">
        {navList.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu-link menu-link__active" : "menu-link"
            }
            to={link[1]}
            key={link[1]}>
            {toCapitalize(link[0])}
          </NavLink>
        ))}
      </div>

      <div className="menu-right">
        <Icon type="Telegram" width={30} height={30} />
        <Icon type="Git" width={30} height={30} />
      </div>
    </div>
  )
}
