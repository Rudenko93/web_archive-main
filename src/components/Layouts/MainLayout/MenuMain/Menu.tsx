import { NavLink } from "react-router-dom"
import { ThemeSwitcherCustom } from "components"
import { EMainRoutes } from "enums"
import { toCapitalize } from "utils"
import { Icon, IconType } from "ui"
import { Search } from "./Search"
import "./Menu.scss"

type NavListItemType = [EMainRoutes, string, IconType]

const navList: Array<NavListItemType> = [
  [EMainRoutes.Features, "features/accordion", "Feature"],
  [EMainRoutes.Ui, "ui/avatar", "Ui"],
  [EMainRoutes.Hooks, "hooks", "Hook"],
  [EMainRoutes.About, "about", "About"],
]

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-left">
        <Search />
        <NavLink to={"/"} key={"/"} className={"logo"}>
          <Icon type="Web" />
          <span className="menu-left-icon__desc">Web Archive</span>
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
            <Icon type={link[2]} className="menu-link-icon" />
            {toCapitalize(link[0])}
          </NavLink>
        ))}
      </div>

      <div className="menu-right">
        <a
          href="https://github.com/Rudenko93/web_archive-main"
          target="_blank"
          rel="noreferrer">
          <Icon type="Git" width={30} height={30} />
        </a>
        <Icon type="Telegram" width={30} height={30} />
      </div>
    </div>
  )
}
