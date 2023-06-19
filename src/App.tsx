import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./components/Layouts"
import {
  TypographyPage,
  UiPage,
  HooksPage,
  ButtonPage,
  IconPage,
  SelectPage,
  SwitcherPage,
  AccordionPage,
  ModalPage,
  CheckboxPage,
  ScrollbarPage,
  SpinnerPage,
} from "./pages"
import { EUiRoutes, EMainRoutes } from "./enums/routes"
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
            path: EUiRoutes.Home,
            element: <HomeUi />,
          },
          {
            path: EUiRoutes.Accordion,
            element: <AccordionPage />,
          },
          {
            path: EUiRoutes.Button,
            element: <ButtonPage />,
          },
          {
            path: EUiRoutes.Checkbox,
            element: <CheckboxPage />,
          },
          {
            path: EUiRoutes.Icon,
            element: <IconPage />,
          },
          {
            path: EUiRoutes.Modal,
            element: <ModalPage />,
          },
          {
            path: EUiRoutes.Scrollbar,
            element: <ScrollbarPage />,
          },
          {
            path: EUiRoutes.Select,
            element: <SelectPage />,
          },
          {
            path: EUiRoutes.Spinner,
            element: <SpinnerPage />,
          },
          {
            path: EUiRoutes.Switch,
            element: <SwitcherPage />,
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
