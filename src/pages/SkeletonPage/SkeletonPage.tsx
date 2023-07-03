import { useState } from "react"
import { ETypographyVariant, Skeleton, Typography } from "ui"
import "./SkeletonPage.scss"

export const SkeletonPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  return (
    <section className="SkeletonPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Skeleton
      </Typography>
      <div style={{ height: "50px", width: "50px", marginBottom: "25px" }}>
        {isLoading && <Skeleton />}
      </div>
      {isLoading ? <Skeleton height="27px" width="200px" /> : <h2>Skeleton</h2>}
      {isLoading ? (
        <div
          style={{
            marginBottom: "25px",
            marginTop: "25px",
            display: "flex",
          }}
          className="ProductsList">
          {new Array(1).fill(1).map((product, index) => (
            <Skeleton height="330px" width="330px" key={index} />
          ))}
        </div>
      ) : (
        <div className="ProductsList">List items</div>
      )}
      {isLoading ? (
        <Skeleton height="100px" width="100px" isCircle />
      ) : (
        <div style={{ height: "100px" }} />
      )}
    </section>
  )
}
