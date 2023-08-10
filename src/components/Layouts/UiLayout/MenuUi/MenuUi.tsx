import { memo } from "react"
import { NavLink } from "react-router-dom"
import { EUiRoutes } from "enums/routes"
import { toCapitalize } from "utils"
import "./MenuUi.scss"

const navList = [
  EUiRoutes.Avatar,
  EUiRoutes.Button,
  EUiRoutes.Breadcrumbs,
  EUiRoutes.Icon,
  EUiRoutes.Hamburger,
  EUiRoutes.Modal,
  EUiRoutes.Overlay,
  EUiRoutes.Scrollbar,
  EUiRoutes.Sidebar,
  EUiRoutes.Skeleton,
  EUiRoutes.Spinner,
  EUiRoutes.Typography,
]

export const MenuUi = memo(() => {
  return (
    <div className="menuUi">
      <div className="menuUi-list">
        {navList.map((link) => (
          <div className="link-wrapper" key={link}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "menuUi-link menuUi-link__active" : "menuUi-link"
              }
              to={link}>
              {toCapitalize(link)}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
})
