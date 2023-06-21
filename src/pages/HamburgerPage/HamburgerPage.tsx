import { ETypographyVariant, Hamburger, Typography } from "ui"
import { useState } from "react"
import "./HamburgerPage.scss"

export const HamburgerPage: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <section className="HamburgerPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Hamburger
      </Typography>
      <Hamburger color="black" isActive={isActive} onClick={handleToggle} />
    </section>
  )
}
