import React, { memo, useCallback, useEffect, useRef, useState } from "react"
import shadowRoot from "react-shadow"
import clsx from "clsx"
import { ButtonIcon } from "ui"
import "./DocumentViewer.scss"

type TProps = {
  className?: string
  step?: number
  template?: string
}
interface IPosition {
  x: number
  y: number
}

const Component: React.FC<TProps> = ({ className, step = 0.1, template }) => {
  const defaultPosition = {
    left: 0,
    scale: 1,
    top: 0,
  }
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const documentRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(defaultPosition)

  const handleSetDefault = useCallback(() => {
    if (containerRef.current && contentRef.current && documentRef.current) {
      setPosition({
        scale: getDefaultScale(),
        top: 0,
        left:
          contentRef.current.clientWidth / containerRef.current?.clientWidth -
          documentRef.current.clientHeight / containerRef.current?.clientHeight,
      })
    }
  }, [])

  useEffect(() => {
    if (contentRef.current && documentRef.current && containerRef.current) {
      if (
        (containerRef.current.clientWidth &&
          containerRef.current.clientHeight) === 0
      ) {
        const resizeObserver = new ResizeObserver(() => {
          resizeObserver.disconnect()
          handleSetDefault()
        })

        resizeObserver.observe(containerRef.current)

        return () => resizeObserver.disconnect()
      }

      handleSetDefault()
    }
  }, [contentRef, containerRef, handleSetDefault])

  const getDefaultScale = () => {
    if (containerRef.current && contentRef.current) {
      const xScale =
        contentRef.current?.clientWidth / containerRef.current?.clientWidth
      const yScale =
        contentRef.current?.clientHeight / containerRef.current?.clientHeight
      return Math.min(xScale, yScale) || 1
    } else {
      return 1
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    e.preventDefault()
    const position: IPosition = { x: e.screenX, y: e.screenY }
    const event = handleUpdatePosition(position)
    const removeEvent = () => {
      window.removeEventListener("mousemove", event)
      window.removeEventListener("mouseup", removeEvent)
    }
    window.addEventListener("mousemove", event)
    window.addEventListener("mouseup", removeEvent)
    return true
  }

  const handleUpdatePosition = (pos: IPosition) => (e: MouseEvent) => {
    const top = position.top - (pos.y - e.screenY) / position.scale
    const left = position.left - (pos.x - e.screenX) / position.scale
    setPosition((position: { left: number; scale: number; top: number }) => ({
      ...position,
      left,
      top,
    }))
  }

  const handleSetScale = (scale: number) => () =>
    setPosition((pos: { left: number; scale: number; top: number }) => ({
      ...pos,
      scale: pos.scale + scale,
    }))

  return (
    <div className={clsx("DocumentViewer", className)}>
      <div className="DocumentViewer__content" ref={contentRef}>
        <div
          ref={documentRef}
          className="DocumentViewer__document"
          style={{
            left: position.left,
            top: position.top,
            transform: `scale(${position.scale})`,
          }}>
          <div className="DocumentViewer__shadowContainer">
            <shadowRoot.div className="DocumentViewer__shadowRoot">
              <div ref={containerRef}>
                {template && (
                  <div dangerouslySetInnerHTML={{ __html: template }} />
                )}
              </div>
            </shadowRoot.div>
          </div>
        </div>
        <div
          className="DocumentViewer__contentDrag"
          onMouseDown={handleMouseDown}
        />
      </div>
      <div className="DocumentViewer__controlButtons">
        <ButtonIcon typeIcon="Center" onClick={handleSetDefault} />
        <ButtonIcon typeIcon="Plus" onClick={handleSetScale(step)} />
        <ButtonIcon
          typeIcon="Minus"
          isDisabled={position.scale - step < 0.1}
          onClick={handleSetScale(-step)}
        />
      </div>
    </div>
  )
}

export const DocumentViewer = memo(Component)
