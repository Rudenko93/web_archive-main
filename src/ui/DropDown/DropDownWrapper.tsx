import { useRef, useState } from "react"
import type { FC, ReactNode } from "react"
import { DropDownUi } from "./ui"

type TProps = {
  children?: ReactNode
  classes: { title: string; list: string; item?: string }
  classNameTitle?: string
  classNameList?: string
  classNameItem?: string
  title: string
}

export const DropDownWrapper: FC<TProps> = ({ children, classes, title }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const refToggleDropDown = useRef<HTMLLIElement>(null)

  const handleToggleDropDown = () => {
    setIsDropDownOpen((prevState?: boolean) => !prevState)
  }

  return (
    <li
      className={classes.title}
      ref={refToggleDropDown}
      onClick={handleToggleDropDown}>
      <span>{title}</span>
      <DropDownUi
        className={classes.list}
        classNameItem={classes?.item}
        isOpen={isDropDownOpen}
        onClose={handleToggleDropDown}
        triggerRef={refToggleDropDown}>
        {children}
      </DropDownUi>
    </li>
  )
}
