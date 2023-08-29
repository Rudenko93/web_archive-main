import type { FC } from "react"
import { ETypographyVariant, Typography } from "ui"

export const TextEditorPage: FC = () => {
  return (
    <section className="TextEditorPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Tabs
      </Typography>
    </section>
  )
}
