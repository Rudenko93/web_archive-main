import { useState } from "react"
import { Button, ETypographyVariant, Overlay, Typography } from "ui"
import "./OverlayPage.scss"

export const OverlayPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <section className="OverlayPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Overlay
      </Typography>

      <Button onClick={handleOpen}>Open</Button>
      <Overlay isActive={isOpen} onClick={handleClose} />
    </section>
  )
}
