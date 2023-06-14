import clsx from "clsx"
import { PropsWithChildren, useState } from "react"
import { Icon } from "ui"
import "./Accordion.scss"

interface IAccordionProps extends PropsWithChildren {
  className?: string
  isActive?: boolean
  label?: string
}

export const Accordion: React.FC<IAccordionProps> = ({
  className,
  isActive = false,
  label = "",
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(isActive)

  const handleToggle = () => setIsOpen((prev) => !prev)

  return (
    <div
      className={clsx("Accordion", className, {
        Accordion_active: isOpen,
      })}>
      <div className="Accordion__header" onClick={handleToggle}>
        <div className="Accordion__header-label">{label}</div>
        <Icon className="Accordion__header-icon" type="ArrowDown" />
      </div>
      {isOpen && <div className="Accordion__content">{children}</div>}
    </div>
  )
}
