import { memo } from "react"
import { EUiRoutes } from "../../../../enums/routes"
import { NavLink } from "react-router-dom"
import { toCapitalize } from "../../../../utils"
import "./MenuUi.scss"

const navList = [
  EUiRoutes.Accordion,
  EUiRoutes.Button,
  EUiRoutes.Checkbox,
  EUiRoutes.DocumentViewer,
  EUiRoutes.Icon,
  EUiRoutes.Hamburger,
  EUiRoutes.Modal,
  EUiRoutes.Overlay,
  EUiRoutes.Scrollbar,
  EUiRoutes.Select,
  EUiRoutes.Spinner,
  EUiRoutes.Switch,
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
