import { memo } from "react"
import { EUiRoutes } from "../../../enums/routes"
import { NavLink } from "react-router-dom"
import { toCapitalize } from "../../utils"
import "./MenuUi.scss"

const navList = [EUiRoutes.Switch, EUiRoutes.Typography]

export const MenuUi = memo(() => {
  return (
    <div className="menuUi">
      <div className="menuUi-list">
        {navList.map((link) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu-link menu-link__active" : "menu-link"
            }
            to={link}
            key={link}>
            {toCapitalize(link.slice(1))}
          </NavLink>
        ))}
      </div>
    </div>
  )
})
