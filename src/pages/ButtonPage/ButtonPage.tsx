import React from "react"
import { Button, ButtonIcon, Typography, ETypographyVariant } from "ui"
import "./ButtonPage.scss"

export const ButtonPage: React.FC = () => {
  return (
    <section className="ButtonPage">
      <Typography align="start" as="h1" variant={ETypographyVariant.TextH1Bold}>
        Button
      </Typography>
      <Button>Click</Button>
      <br />
      <Button isDisabled>Disabled</Button>
      <br />
      <Button typeIcon="ArrowRight">Next</Button>
      <br />
      <Button typeIcon="ArrowRight" isDisabled>
        Next
      </Button>
      <br />
      <ButtonIcon typeIcon="Button" width={64} height={64} />
      <br />
      <ButtonIcon typeIcon="Button" width={64} height={64} isDisabled={true} />
    </section>
  )
}
