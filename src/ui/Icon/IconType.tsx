import { ReactComponent as Telegram } from "../assets/icons/telegram.svg"
import { ReactComponent as Git } from "../assets/icons/git.svg"
import { ReactComponent as Svg } from "../assets/icons/svg.svg"
import { ReactComponent as Button } from "../assets/icons/button.svg"
import { ReactComponent as ArrowRight } from "../assets/icons/arrow-right.svg"
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg"
import { ReactComponent as Close } from "../assets/icons/close.svg"
import { ReactComponent as Checkbox } from "../assets/icons/checkbox.svg"
import { ReactComponent as Spinner } from "../assets/icons/spinner.svg"
import { ReactComponent as Center } from "../assets/icons/center.svg"
import { ReactComponent as Plus } from "../assets/icons/plus.svg"
import { ReactComponent as Minus } from "../assets/icons/minus.svg"
import { ReactComponent as Copy } from "../assets/icons/copy.svg"
import { ReactComponent as Light } from "../assets/icons/light.svg"
import { ReactComponent as Dark } from "../assets/icons/dark.svg"
import { ReactComponent as ArrowL } from "../assets/icons/arrow-l.svg"
import { ReactComponent as ArrowR } from "../assets/icons/arrow-r.svg"
import { ReactComponent as Home } from "../assets/icons/home.svg"
import { ReactComponent as Web } from "../assets/icons/web.svg"
import { ReactComponent as Search } from "../assets/icons/search.svg"
import { ReactComponent as Hook } from "../assets/icons/hook.svg"
import { ReactComponent as Feature } from "../assets/icons/feature.svg"
import { ReactComponent as Ui } from "../assets/icons/ui.svg"
import { ReactComponent as About } from "../assets/icons/about.svg"
import { ReactComponent as Underline } from "../assets/icons/underline.svg"
import { ReactComponent as H2 } from "../assets/icons/h2.svg"
import { ReactComponent as Ol } from "../assets/icons/ol.svg"
import { ReactComponent as Ul } from "../assets/icons/ul.svg"
import { ReactComponent as Visibility } from "../assets/icons/visibility.svg"
import { ReactComponent as VisibilityOff } from "../assets/icons/visibility-off.svg"
import { ReactComponent as Bold } from "../assets/icons/bold.svg"
import { ReactComponent as Highlight } from "../assets/icons/highlight.svg"

export type IconType =
  | "Git"
  | "Telegram"
  | "Svg"
  | "Button"
  | "ArrowRight"
  | "ArrowDown"
  | "Close"
  | "Checkbox"
  | "Spinner"
  | "Center"
  | "Minus"
  | "Plus"
  | "Copy"
  | "Light"
  | "Dark"
  | "ArrowL"
  | "ArrowR"
  | "Home"
  | "Web"
  | "Search"
  | "Hook"
  | "Feature"
  | "Ui"
  | "About"
  | "Underline"
  | "H2"
  | "Ol"
  | "Ul"
  | "Visibility"
  | "VisibilityOff"
  | "Bold"
  | "Highlight"

export const iconTypes = new Map([
  ["Telegram", <Telegram />],
  ["Git", <Git />],
  ["Svg", <Svg />],
  ["Button", <Button />],
  ["ArrowRight", <ArrowRight />],
  ["ArrowDown", <ArrowDown />],
  ["Close", <Close />],
  ["Checkbox", <Checkbox />],
  ["Spinner", <Spinner />],
  ["Center", <Center />],
  ["Minus", <Minus />],
  ["Plus", <Plus />],
  ["Copy", <Copy />],
  ["Light", <Light />],
  ["Dark", <Dark />],
  ["ArrowL", <ArrowL />],
  ["ArrowR", <ArrowR />],
  ["Home", <Home />],
  ["Web", <Web />],
  ["Search", <Search />],
  ["Hook", <Hook />],
  ["Feature", <Feature />],
  ["Ui", <Ui />],
  ["About", <About />],

  ["Underline", <Underline />],
  ["H2", <H2 />],
  ["Ol", <Ol />],
  ["Ul", <Ul />],
  ["Visibility", <Visibility />],
  ["VisibilityOff", <VisibilityOff />],
  ["Bold", <Bold />],
  ["Highlight", <Highlight />],
])
