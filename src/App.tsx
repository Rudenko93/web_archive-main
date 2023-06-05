import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./components/Layouts"
import { TypographyPage } from "./pages/TypographyPage"
import { EUiRoutes, EMainRoutes } from "./enums/routes"
import { Switch } from "./components/Switch/Switch"
import { UiPage } from "./pages/UiPage"
import { HooksPage } from "./pages"
import { HomeUi } from "./components/HomeUi"
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
            path: "",
            element: <HomeUi />,
          },
          {
            path: EUiRoutes.Switch,
            element: <Switch />,
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
