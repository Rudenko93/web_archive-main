import type { FC } from "react"
import { ETypographyVariant, Portal, Typography } from "ui"
import "./PortalPage.scss"

export const PortalPage: FC = () => {
  return (
    <section className="PortalPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Portal
      </Typography>
      <Portal
        className="MyPortal"
        element="span"
        elementFindById="react-modals">
        <h3>Portal container</h3>
      </Portal>
    </section>
  )
}
