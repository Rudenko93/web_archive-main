import type { FC } from "react"
import { ETypographyVariant, TextEditor, Typography } from "ui"
import "./TextEditorPage.scss"

export const TextEditorPage: FC = () => {
  return (
    <section className="TextEditorPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Text Editor
      </Typography>
      <TextEditor title="Text editor" />
    </section>
  )
}
