import { Button, ETypographyVariant, Typography } from "ui"
import { useNavigate } from "react-router-dom"
import "./HomePage.scss"

export const HomePage = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate("/ui/accordion")

  return (
    <div className="HomePage">
      <div className="title">
        <Typography
          align="center"
          as="h1"
          classN="margin-bottom-0"
          variant={ETypographyVariant.ExtraLarge}>
          The web archive contains a complete set of free user
        </Typography>
        <Typography
          align="center"
          as="h1"
          color="aqua"
          classN="margin-top-0"
          variant={ETypographyVariant.ExtraLarge}>
          interface tools.
        </Typography>
      </div>
      <div className="description">
        <Typography
          as="h2"
          align="center"
          classN="margin-top-0"
          variant={ETypographyVariant.TextH2Medium}>
          This is a simple, modular and accessible component library that gives
          you the building blocks you need to build your React applications.
        </Typography>
      </div>

      <div className="buttons">
        <Button onClick={handleClick} typeIcon="ArrowRight">
          Get started
        </Button>
      </div>
    </div>
  )
}
