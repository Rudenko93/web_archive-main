import type { FC } from "react"
import { ETypographyVariant, Icon, Tooltip, Typography } from "ui"
import "./TooltipPage.scss"

export const TooltipPage: FC = () => {
  const render = () => {
    return <Icon type="Svg" width={64} height={64} />
  }

  return (
    <section className="TooltipPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Tooltip
      </Typography>

      <Tooltip trigger={render()} id="bottom">
        <div>
          <h3>This is a very interesting header</h3>
          <ul>
            <li>Some</li>
            <li>Interesting</li>
            <li>Stuff</li>
          </ul>
        </div>
      </Tooltip>

      <Tooltip
        trigger="Hover"
        place="right"
        id="right"
        classes={{ container: "tooltip__container" }}>
        <h3>Right</h3>
      </Tooltip>

      <Tooltip trigger="Click" place="bottom" id="top" openOnClick={true}>
        <h3>Bottom</h3>
      </Tooltip>
    </section>
  )
}
