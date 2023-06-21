import { ETypographyVariant, Typography } from "ui"
import "./SidebarPage"

export const SidebarPage = () => {
  return (
    <section className="SidebarPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Scrollbar
      </Typography>{" "}
    </section>
  )
}
