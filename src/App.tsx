import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./components/Layouts"
import { EUiRoutes, EMainRoutes } from "./enums/routes"
import { HomeUi } from "./components/HomeUi"
import { useTheme } from "hooks"
import { ThemeProvider } from "services/context"
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
  DocumentViewerPage,
  OverlayPage,
  HamburgerPage,
  SidebarPage,
  AvatarPage,
  FormPage,
  TabsPage,
  RatingPage,
  SkeletonPage,
  DropDownPage,
  TooltipPage,
  CopyPage,
  PortalPage,
  AutocompletePage,
  SliderPage,
  BreadcrumbsPage,
  PaginationPage,
  BreadcrumbsDetailPage,
} from "./pages"
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
            path: EUiRoutes.Autocomplete,
            element: <AutocompletePage />,
          },
          {
            path: EUiRoutes.Typography,
            element: <TypographyPage />,
          },
          {
            path: EUiRoutes.Avatar,
            element: <AvatarPage />,
          },
          {
            path: EUiRoutes.Button,
            element: <ButtonPage />,
          },
          {
            path: EUiRoutes.Breadcrumbs,
            element: <BreadcrumbsPage />,
          },
          {
            path: `${EUiRoutes.Breadcrumbs}/:id`,
            element: <BreadcrumbsDetailPage />,
          },
          {
            path: EUiRoutes.Checkbox,
            element: <CheckboxPage />,
          },
          {
            path: EUiRoutes.Copy,
            element: <CopyPage />,
          },
          {
            path: EUiRoutes.DocumentViewer,
            element: <DocumentViewerPage />,
          },
          {
            path: EUiRoutes.DropDown,
            element: <DropDownPage />,
          },
          {
            path: EUiRoutes.Form,
            element: <FormPage />,
          },
          {
            path: EUiRoutes.Hamburger,
            element: <HamburgerPage />,
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
            path: EUiRoutes.Overlay,
            element: <OverlayPage />,
          },
          {
            path: EUiRoutes.Pagination,
            element: <PaginationPage />,
          },
          {
            path: EUiRoutes.Portal,
            element: <PortalPage />,
          },
          {
            path: EUiRoutes.Rating,
            element: <RatingPage />,
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
            path: EUiRoutes.Sidebar,
            element: <SidebarPage />,
          },
          {
            path: EUiRoutes.Skeleton,
            element: <SkeletonPage />,
          },
          {
            path: EUiRoutes.Slider,
            element: <SliderPage />,
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
            path: EUiRoutes.Tabs,
            element: <TabsPage />,
          },
          {
            path: EUiRoutes.Tooltip,
            element: <TooltipPage />,
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
  const themeState = useTheme()
  return (
    <ThemeProvider value={themeState}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  )
}

export default App
