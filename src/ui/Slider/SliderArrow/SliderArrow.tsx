import clsx from "clsx"
import { useEffect, useRef } from "react"
import type { CSSProperties, FC, MouseEventHandler } from "react"
import { Icon } from "ui"
import { ESliderArrow } from "./enums"

type TProps = {
  backgroundColor?: string
  className?: string
  dataTestId?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  opacity?: number
  style?: CSSProperties
  styles?: CSSProperties
  type: ESliderArrow
}

export const SliderArrow: FC<TProps> = ({
  backgroundColor = "#e8e8e8",
  className,
  dataTestId = "uikit__slider-arrow",
  onClick,
  opacity = 1,
  style,
  styles,
  type,
}) => {
  const arrowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.style.setProperty(
        "--slider-arrow-backgroundColor",
        backgroundColor
      )
      arrowRef.current.style.setProperty(
        "--slider-arrow-opacity",
        opacity.toString()
      )
    }
  }, [backgroundColor, opacity])

  return (
    <div
      className={clsx("Slider-Arrow", className)}
      data-testid={dataTestId}
      ref={arrowRef}
      style={{ ...style, ...styles }}
      onClick={onClick}>
      <div
        className={clsx("Slider-ArrowButton", {
          "Slider-ArrowButton__left": type === ESliderArrow.Previous,
          "Slider-ArrowButton__right": type === ESliderArrow.Next,
        })}>
        <Icon
          className="Slider-ArrowCustom"
          width={30}
          height={30}
          type={type === ESliderArrow.Previous ? "ArrowL" : "ArrowR"}
        />
      </div>
    </div>
  )
}
