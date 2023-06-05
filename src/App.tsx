import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./components/Layouts"
import { TypographyPage, UiPage, HooksPage } from "./pages"
import { EUiRoutes, EMainRoutes } from "./enums/routes"
import { HomeUi } from "./components/HomeUi"

import { SwitchPage } from "./pages/SwitchPage"
import "./App.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: EMainRoutes.Ui,
        element: <UiPage />,
        children: [
          {
            path: EUiRoutes.Home,
            element: <HomeUi />,
          },
          {
            path: EUiRoutes.Switch,
            element: <SwitchPage />,
          },
          {
            path: EUiRoutes.Typography,
            element: <TypographyPage />,
          },
        ],
      },
      {
        path: EMainRoutes.Hooks,
        element: <HooksPage />,
      },
    ],
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
