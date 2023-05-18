import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout"
import { TypographyPage } from "./pages"
import "./App.css"
import { ERoutes } from "./enums/routes"
import { Switch } from "./components/Switch/Switch"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ERoutes.Switch,
        element: <Switch />,
      },
      {
        path: ERoutes.Typography,
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
