import { memo, useRef } from "react"
import type { FC, ReactNode } from "react"
import { CSSTransition } from "react-transition-group"
import clsx from "clsx"
import { useOutsideClick } from "hooks"
import "./DropDownUi.scss"

type TProps = {
  children?: ReactNode
  className?: string
  classNameItem?: string
  isOpen?: boolean
  timeout?: number
  triggerRef?: React.RefObject<HTMLElement>
  onClose: () => void
}

const Component: FC<TProps> = ({
  children,
  className,
  classNameItem,
  isOpen,
  timeout = 300,
  triggerRef,
  onClose,
}) => {
  const nodeRef = useRef(null)

  useOutsideClick({
    elementRef: nodeRef,
    triggerRef,
    onOutsideClick: onClose,
    enabled: isOpen,
  })

  return (
    <CSSTransition
      className={className}
      in={isOpen}
      nodeRef={nodeRef}
      timeout={timeout}
      unmountOnExit>
      <div ref={nodeRef}>
        <div className={clsx("DropDown", classNameItem)}>{children}</div>
      </div>
    </CSSTransition>
  )
}

export const DropDownUi = memo(Component)
