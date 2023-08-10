import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Button, ETypographyVariant, Typography } from "ui"
import "./AboutPage.scss"

export const AboutPage: FC = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate("/")

  return (
    <div className="AboutPage">
      <div className="AboutPage__container">
        <Typography
          align="center"
          as="h1"
          color="aqua"
          classN="margin-top-0"
          variant={ETypographyVariant.ExtraLarge}>
          About page
        </Typography>
        <Typography
          as="h2"
          align="center"
          classN="margin-top-0"
          variant={ETypographyVariant.TextH2Medium}>
          This page is not available yet
        </Typography>
        <div className="buttons">
          <Button onClick={handleClick} typeIcon="ArrowRight">
            Return to Main page
          </Button>
        </div>
      </div>
    </div>
  )
}
