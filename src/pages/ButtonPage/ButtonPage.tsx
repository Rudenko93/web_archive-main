import React from "react"
import { ETypographyVariant, Typography } from "../../ui/Typography"
import "./ButtonPage.scss"
import { Button } from "../../ui/Button"
import { ButtonIcon } from "../../ui/ButtonIcon"

export const ButtonPage: React.FC = () => {
  return (
    <div className="ButtonPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Button
      </Typography>
      <Button>Click</Button>
      <br />
      <br />
      <Button isDisabled>Disabled</Button>
      <br />
      <br />
      <Button typeIcon="ArrowRight">Next</Button>
      <br />
      <br />
      <Button typeIcon="ArrowRight" isDisabled>
        Next
      </Button>
      <br />
      <br />
      <ButtonIcon typeIcon="Button" width={64} height={64} />
      <br />
      <br />
      <ButtonIcon typeIcon="Button" width={64} height={64} isDisabled={true} />
    </div>
  )
}
