import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./components/Layouts"
import { EUiRoutes, EMainRoutes, EFeaturedRoutes } from "./enums/routes"
import { useTheme } from "hooks"
import { ThemeProvider } from "services/context"
import {
  TypographyPage,
  UiPage,
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
  HomePage,
  NotFoundPage,
  MainUiPage,
  MainFeaturesPage,
  FeaturesPage,
  MainHooksPage,
  AboutPage,
} from "./pages"
import "./App.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: EMainRoutes.Ui,
        element: <UiPage />,
        children: [
          {
            path: EUiRoutes.Main,
            element: <MainUiPage />,
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
            path: EUiRoutes.Scrollbar,
            element: <ScrollbarPage />,
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
            path: EUiRoutes.Spinner,
            element: <SpinnerPage />,
          },
          {
            path: EUiRoutes.Typography,
            element: <TypographyPage />,
          },
        ],
      },

      {
        path: EMainRoutes.Features,
        element: <FeaturesPage />,
        children: [
          {
            path: EFeaturedRoutes.Main,
            element: <MainFeaturesPage />,
          },
          {
            path: EFeaturedRoutes.Accordion,
            element: <AccordionPage />,
          },
          {
            path: EFeaturedRoutes.Autocomplete,
            element: <AutocompletePage />,
          },

          {
            path: EFeaturedRoutes.Checkbox,
            element: <CheckboxPage />,
          },
          {
            path: EFeaturedRoutes.Copy,
            element: <CopyPage />,
          },
          {
            path: EFeaturedRoutes.DocumentViewer,
            element: <DocumentViewerPage />,
          },
          {
            path: EFeaturedRoutes.DropDown,
            element: <DropDownPage />,
          },
          {
            path: EFeaturedRoutes.Form,
            element: <FormPage />,
          },

          {
            path: EFeaturedRoutes.Pagination,
            element: <PaginationPage />,
          },
          {
            path: EFeaturedRoutes.Portal,
            element: <PortalPage />,
          },
          {
            path: EFeaturedRoutes.Rating,
            element: <RatingPage />,
          },
          {
            path: EFeaturedRoutes.Select,
            element: <SelectPage />,
          },
          {
            path: EFeaturedRoutes.Slider,
            element: <SliderPage />,
          },

          {
            path: EFeaturedRoutes.Switch,
            element: <SwitcherPage />,
          },
          {
            path: EFeaturedRoutes.Tabs,
            element: <TabsPage />,
          },
          {
            path: EFeaturedRoutes.Tooltip,
            element: <TooltipPage />,
          },
        ],
      },
      {
        path: EMainRoutes.Hooks,
        element: <MainHooksPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
])

export const App: React.FC = () => {
  const themeState = useTheme()
  return (
    <ThemeProvider value={themeState}>
      <div className="App">
        <RouterProvider router={router} />
        {/* <>{useScrollToTop()}</> */}
      </div>
    </ThemeProvider>
  )
}

export default App
