declare module "*.svg" {
  import React = require("react")
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module "*.jpg" {
  import React = require("react")
  export const ReactComponent: React.FC<React.JPGProps<JPGElement>>
  const src: string
  export default src
}

declare module "react-rating-stars-component" {
  type TProps = {
    classNames?: string
    count?: number
    value?: number
    char?: string
    color?: string
    activeColor?: string
    size?: string | number
    edit?: boolean
    isHalf?: boolean
    emptyIcon?: element
    halfIcon?: element
    filledIcon?: element
    a11y?: boolean
    onChange?: (number) => void
    isEdit?: boolean
  }

  onChange(new_rating)
  function ReactStars(parameters: TProps): JSX.Element
  export = ReactStars
}
