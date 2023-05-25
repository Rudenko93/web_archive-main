import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout"
import { TypographyPage } from "./pages/TypographyPage"
import "./App.scss"
import { EUiRoutes } from "./enums/routes"
import { Switch } from "./components/Switch/Switch"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
