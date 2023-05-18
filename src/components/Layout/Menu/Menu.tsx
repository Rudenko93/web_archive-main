import React, { memo } from "react"
import { ERoutes } from "../../../enums/routes"
import { Link, NavLink } from "react-router-dom"
import { toCapitalize } from "../../utils"
import "./Menu.scss"

const navList = [ERoutes.Switch, ERoutes.Typography]

export const Menu = memo(() => {
  return (
    <div className="menu">
      <div className="menu-list">
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
