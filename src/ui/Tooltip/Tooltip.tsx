import React, {
  AnchorHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react"
import { ElementType, ReactNode } from "react"
import { Tooltip as ReactTooltip, ChildrenType } from "react-tooltip"
import "./Tooltip.scss"
import clsx from "clsx"

type TPlace =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"

type TClasses = {
  container?: string
  content?: string
  trigger?: string
}

type TProps = {
  classes?: TClasses
  id?: string
  trigger: JSX.Element | string
  children: ChildrenType
  clickable?: boolean
  place?: TPlace
  offset?: number
}

export const Tooltip: React.FC<TProps> = ({
  classes,
  id,
  trigger,
  children,
  clickable = false,
  place = "bottom",
  offset = 10,
}) => {
  return (
    <div className={clsx("tooltip", classes?.container)}>
      <a data-tooltip-id={id} className={classes?.trigger}>
        {trigger}
      </a>

      <ReactTooltip
        id={id}
        className={classes?.content}
        clickable={clickable}
        place={place}
        offset={offset}>
        {children}
      </ReactTooltip>
    </div>
  )
}
