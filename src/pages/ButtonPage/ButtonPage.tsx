import React from "react"
import { ETypographyVariant, Typography } from "../../components/Typography"
import "./ButtonPage.scss"

export const ButtonPage: React.FC = () => {
  return (
    <div>
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Button
      </Typography>
    </div>
  )
}
