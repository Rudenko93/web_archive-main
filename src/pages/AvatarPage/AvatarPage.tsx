import React from "react"
import avatar from "./avatar.jpg"
import "./AvatarPage.scss"
import { Avatar, ETypographyVariant, Typography } from "ui"

export const AvatarPage: React.FC = () => {
  return (
    <section className="AvatarPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Avatar
      </Typography>
      <Typography as="h2" variant={ETypographyVariant.TextH2Medium}>
        Avatar with image
      </Typography>
      <Avatar image={avatar} />
      <hr />
      <Typography as="h2" variant={ETypographyVariant.TextH2Medium}>
        Avatar with initials
      </Typography>
      <Avatar title="IT" />
    </section>
  )
}
