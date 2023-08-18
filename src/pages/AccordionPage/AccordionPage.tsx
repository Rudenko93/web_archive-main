import { Accordion, ETypographyVariant, Typography } from "ui"
import "./AccordionPage.scss"

export const AccordionPage = () => {
  return (
    <section className="AccordionPage">
      <Typography align="start" as="h1" variant={ETypographyVariant.TextH1Bold}>
        Accordion
      </Typography>
      <Accordion label="It's an accordion">
        <span style={{ textAlign: "left" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          ullam ab mollitia, cumque ratione dicta quisquam ea hic nostrum
          incidunt cupiditate dolor eveniet numquam fugit totam id officiis quae
          optio?
        </span>
        <span style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </Accordion>
    </section>
  )
}
