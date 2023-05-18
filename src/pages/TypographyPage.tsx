import React from "react"
import { ETypographyVariant, Typography } from "../components/Typography"

export const TypographyPage = () => {
  return (
    <div>
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Typography
      </Typography>
    </div>
  )
}
