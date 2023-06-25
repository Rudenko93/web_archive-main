import { useState } from "react"
import type { FC } from "react"
import { ETypographyVariant, Rating, Typography } from "ui"
import "./RatingPage.scss"

export const RatingPage: FC = () => {
  const [rating, setRating] = useState(0)

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
  }

  return (
    <section className="RatingPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Overlay
      </Typography>
      <Rating
        activeColor="#ffd700"
        count={5}
        size={45}
        onChange={handleRatingChange}
      />
      <div>
        <pre>{JSON.stringify(rating, null, 2)}</pre>
      </div>
    </section>
  )
}
