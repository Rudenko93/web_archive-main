import { Outlet } from "react-router-dom"
import { FeaturesLayout } from "components/Layouts/FeaturesLayout"
import "./FeaturesPage.scss"

export const FeaturesPage = () => {
  return (
    <div className="FeaturesPage">
      <div className="FeaturesPage-container">
        <FeaturesLayout />
        <Outlet />
      </div>
    </div>
  )
}
