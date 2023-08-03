import { memo } from "react"
import { NavLink } from "react-router-dom"
import { EUiRoutes } from "enums/routes"
import { toCapitalize } from "utils"
import "./MenuUi.scss"

const navList = [
  EUiRoutes.Accordion,
  EUiRoutes.Autocomplete,
  EUiRoutes.Avatar,
  EUiRoutes.Button,
  EUiRoutes.Breadcrumbs,
  EUiRoutes.Checkbox,
  EUiRoutes.Copy,
  EUiRoutes.DocumentViewer,
  EUiRoutes.DropDown,
  EUiRoutes.Form,
  EUiRoutes.Icon,
  EUiRoutes.Hamburger,
  EUiRoutes.Modal,
  EUiRoutes.Overlay,
  EUiRoutes.Pagination,
  EUiRoutes.Portal,
  EUiRoutes.Rating,
  EUiRoutes.Scrollbar,
  EUiRoutes.Select,
  EUiRoutes.Sidebar,
  EUiRoutes.Skeleton,
  EUiRoutes.Slider,
  EUiRoutes.Spinner,
  EUiRoutes.Switch,
  EUiRoutes.Tabs,
  EUiRoutes.Tooltip,
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
