import { memo } from "react"
import { NavLink } from "react-router-dom"
import { EFeaturedRoutes } from "enums/routes"
import { toCapitalize } from "utils"
import "./MenuFeatures.scss"

const navList = [
  EFeaturedRoutes.Accordion,
  EFeaturedRoutes.Autocomplete,
  EFeaturedRoutes.Calendar,
  EFeaturedRoutes.Checkbox,
  EFeaturedRoutes.Copy,
  EFeaturedRoutes.DocumentViewer,
  EFeaturedRoutes.DropDown,
  EFeaturedRoutes.Form,
  EFeaturedRoutes.Pagination,
  EFeaturedRoutes.Portal,
  EFeaturedRoutes.Rating,
  EFeaturedRoutes.Select,
  EFeaturedRoutes.Slider,
  EFeaturedRoutes.Switch,
  EFeaturedRoutes.Tabs,
  EFeaturedRoutes.TextEditor,
  EFeaturedRoutes.Tooltip,
]

export const MenuFeatures = memo(() => {
  return (
    <div className="MenuFeatures">
      <div className="MenuFeatures-list">
        {navList.map((link) => (
          <div className="link-wrapper" key={link}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "MenuFeatures-link MenuFeatures-link__active"
                  : "MenuFeatures-link"
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
