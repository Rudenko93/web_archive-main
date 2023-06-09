import clsx from "clsx"

import { useState } from "react"
import "./Accordion.scss"
import { Icon } from "../Icon"

interface IAccordionProps {
  className?: string
  isActive?: boolean
  label?: string
}

export const Accordion: React.FC<IAccordionProps> = ({
  className,
  isActive = false,
  label = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isActive)

  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <div
      className={clsx("Accordion", className, {
        Accordion__active: isOpen,
      })}>
      <div className="Accordion__header" onClick={handleToggle}>
        <div className="Accordion__header-label">{label}</div>
        <Icon className="Accordion__header-icon" type="ArrowDown" />
      </div>
    </div>
  )
}
