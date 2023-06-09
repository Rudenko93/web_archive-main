import React from "react"
import { ETypographyVariant, Typography } from "../../ui/Typography"
import "./ButtonPage.scss"
import { Button } from "../../ui/Button"
import { ButtonIcon } from "../../ui/ButtonIcon"

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
      <br />
      <br />
      <br />
      <br />
      <ButtonIcon typeIcon="Button" />
      <br />
      <br />
      <ButtonIcon typeIcon="Button" isDisabled={true} />
    </div>
  )
}
