import { FaTelegramPlane } from "react-icons/fa"
import { FaGitSquare } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { SwitcherCustom } from "../../SwitcherCustom/SwitcherCustom"
import { EMainRoutes } from "../../../enums/routes"
import { toCapitalize } from "../../utils"
import "./Menu.scss"

const navList = [
  EMainRoutes.Ui,
  EMainRoutes.Hooks,
  EMainRoutes.Contacts,
  EMainRoutes.Others,
]

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-left">
        <input type="text" placeholder="Search ..." />
        <NavLink to={"/"} key={"/"} className={"logo"}>
          Ui master
        </NavLink>
        <SwitcherCustom />
        <span>Rus/eng</span>
      </div>
      <div className="menu-list">
        {navList.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu-link menu-link__active" : "menu-link"
            }
            to={link}
            key={link}>
            {toCapitalize(link)}
          </NavLink>
        ))}
      </div>

      <div className="menu-right">
        <FaGitSquare />
        <FaTelegramPlane />
      </div>
    </div>
  )
}
