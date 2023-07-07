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
  openOnClick?: boolean
  place?: TPlace
  offset?: number
  delayShow?: number
  delayHide?: number
  // controlled?: boolean
}

export const Tooltip: React.FC<TProps> = ({
  classes,
  id,
  trigger,
  children,
  clickable = false,
  openOnClick = false,
  place = "bottom",
  offset = 10,
  delayShow = 0,
  delayHide = 0,
  // controlled = true,
}) => {
  // const [isOpen, setIsOpen] = useState(false)
  // isOpen={isOpen}
  // setIsOpen={setIsOpen}
  // afterShow=()=>setIsOpen(false)

  // const handleMouseEvent = () => {
  //   if (controlled) {
  //     return () => setIsOpen((prev) => !prev)
  //   }
  // }

  return (
    <div className={clsx("tooltip", classes?.container)}>
      <div
        data-tooltip-id={id}
        className={classes?.trigger}
        // onMouseEnter={handleMouseEvent()}
        // onMouseLeave={handleMouseEvent()}
      >
        {trigger}
      </div>

      <ReactTooltip
        id={id}
        className={classes?.content}
        clickable={clickable}
        openOnClick={openOnClick}
        delayShow={delayShow}
        delayHide={delayHide}
        place={place}
        offset={offset}
        // isOpen={isOpen}
      >
        {children}
      </ReactTooltip>
    </div>
  )
}
