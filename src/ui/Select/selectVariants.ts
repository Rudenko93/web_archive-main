import type { ETheme } from "enums"
import type { TSelectVariantStyle } from "./types"

const COLOR_PRIMARY = "#319795"
const COLOR_PRIMARY_HOVER = "#2c7a7b"
const COLOR_WHITE = "#fff"
const COLOR_BLACK = "#2d3748"
const COLOR_DARKNESS = "#524090"
const COLOR_GRAY = "#aaaaaa"
const COLOR_GRADIENT = "linear-gradient(to right, #987bd7,  #5b47a3)"
const CURRENT_COLOR = "currentColor"
const BORDER_RADIUS = "4px"
const CURSOR = "pointer"
const TRANSITION = "all 0.15s"
const Z_INDEX = 10

export const VARIANTS: { [key in ETheme]: TSelectVariantStyle } = {
  // Dark theme
  DARK: {
    control: {
      background: COLOR_GRADIENT,
      border: `1px solid ${COLOR_GRAY}`,
      borderRadius: BORDER_RADIUS,
      cursor: CURSOR,
      transition: TRANSITION,
      color: "#fff",
      ":active": {
        border: `1px solid ${COLOR_PRIMARY}`,
      },
      ":hover": {
        border: `1px solid ${COLOR_PRIMARY}`,
      },
    },
    input: {
      color: COLOR_WHITE,
    },
    placeholder: {
      color: COLOR_GRAY,
    },
    singleValue: {
      color: CURRENT_COLOR,
    },
    option: {
      backgroundColor: COLOR_DARKNESS,
      borderRadius: "0",
      color: CURRENT_COLOR,
      cursor: CURSOR,
      transition: TRANSITION,
      ":active": {
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_WHITE,
      },
      ":hover": {
        backgroundColor: COLOR_PRIMARY_HOVER,
        color: COLOR_WHITE,
      },
    },
    menu: {
      backgroundColor: COLOR_DARKNESS,
      zIndex: Z_INDEX,
    },
    menuList: {
      zIndex: Z_INDEX,
    },
    menuPortal: {
      zIndex: Z_INDEX,
    },
  },

  // Light theme
  LIGHT: {
    control: {
      background: COLOR_WHITE,
      border: `1px solid ${COLOR_GRAY}`,
      borderRadius: BORDER_RADIUS,
      cursor: CURSOR,
      transition: TRANSITION,
      ":active": {
        border: `1px solid ${COLOR_PRIMARY}`,
      },
      ":hover": {
        border: `1px solid ${COLOR_PRIMARY}`,
      },
    },
    input: {
      color: "#44337A",
    },
    placeholder: {
      color: COLOR_GRAY,
    },
    singleValue: {
      color: COLOR_BLACK,
    },
    option: {
      backgroundColor: COLOR_WHITE,
      borderRadius: "0",
      color: COLOR_BLACK,
      cursor: CURSOR,
      transition: TRANSITION,
      ":active": {
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_WHITE,
      },
      ":hover": {
        backgroundColor: COLOR_PRIMARY_HOVER,
        color: COLOR_WHITE,
      },
    },
    menu: {
      backgroundColor: COLOR_WHITE,
      zIndex: Z_INDEX,
    },
    menuList: {},
    menuPortal: {},
  },
}
