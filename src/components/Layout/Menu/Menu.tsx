import React, { memo } from "react"
import { ERoutes } from "../../../enums/routes"
import { Link } from "react-router-dom"
import { toCapitalize } from "../../utils"

const navList = [ERoutes.Switch, ERoutes.Typography]

export const Menu = memo(() => {
  return (
    <div>
      {navList.map((link) => (
        <Link to={link} key={link}>
          {toCapitalize(link.slice(1))}
        </Link>
      ))}
    </div>
  )
})
