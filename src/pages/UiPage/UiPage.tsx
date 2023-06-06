import { Outlet } from "react-router-dom"
import { UiLayout } from "../../components/Layouts/UiLayout/UiLayout"
import "./UiPage.scss"

export const UiPage = () => {
  return (
    <div className="uiPage">
      <div className="uiPage-container">
        <UiLayout />
        <Outlet />
      </div>
    </div>
  )
}
