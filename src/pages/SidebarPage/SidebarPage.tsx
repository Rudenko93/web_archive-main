import { useRef, useState } from "react"
import { ETypographyVariant, Hamburger, Sidebar, Typography } from "ui"
import "./SidebarPage.scss"

export const SidebarPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const sidebarRef = useRef(null)

  const handleSidebarOpen = () => {
    setIsActive(true)
  }

  const handleSidebarClose = () => {
    setIsActive(false)
  }
  return (
    <section className="SidebarPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Sidebar
      </Typography>
      <Hamburger isActive={isActive} onClick={handleSidebarOpen} />
      <Sidebar
        className="SidebarPageSidebar"
        isActive={isActive}
        onClose={handleSidebarClose}
        ref={sidebarRef}>
        <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
          Title
        </Typography>
      </Sidebar>
    </section>
  )
}
