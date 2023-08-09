import { Button, ETypographyVariant, Typography } from "ui"
import "./NotFoundPage.scss"
import { useNavigate } from "react-router-dom"

export const NotFoundPage = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate("/")

  return (
    <div className="NotFoundPage">
      <div className="NotFoundPage__container">
        <Typography
          align="center"
          as="h1"
          color="aqua"
          classN="margin-top-0"
          variant={ETypographyVariant.ExtraLarge}>
          404
        </Typography>
        <Typography
          as="h2"
          align="center"
          classN="margin-top-0"
          variant={ETypographyVariant.TextH2Medium}>
          Page not found.
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
