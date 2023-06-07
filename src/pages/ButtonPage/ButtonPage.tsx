import React from "react"
import { ETypographyVariant, Typography } from "../../components/Typography"
import "./ButtonPage.scss"
import { Button } from "../../components/Button"

export const ButtonPage: React.FC = () => {
  return (
    <div>
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Button
      </Typography>
      <Button>Click</Button>
      <br />
      <br />
      <Button isDisabled>Disabled</Button>
    </div>
  )
}
