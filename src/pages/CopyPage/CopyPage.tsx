import { useState } from "react"
import type { FC } from "react"
import clsx from "clsx"
import { ETypographyVariant, Icon, TooltipCustom, Typography } from "ui"
import { useCopyToClipboard, useMediaQuery } from "hooks"
import "./CopyPage.scss"

export const CopyPage: FC = () => {
  const userId1 = "4f564caa-005c-42df-895d-25ee84346208"
  const userId2 = "cb35ac87-b8b3-43fe-9c26-db94dd99540b"
  const [hasCopied, setHasCopied] = useState({
    userId1: false,
    userId2: false,
  })
  const [value, copy] = useCopyToClipboard()

  const matches = useMediaQuery("(min-width: 768px)")

  const handleCopy = async (text: string, name: string): Promise<void> => {
    const isCopied = await copy(text)
    if (isCopied) {
      setHasCopied((prevState) => ({
        ...prevState,
        [name]: true,
      }))

      setTimeout(() => {
        setHasCopied((prevState) => ({
          ...prevState,
          userId1: false,
          userId2: false,
        }))
      }, 150)
    }
  }

  return (
    <section className="CopyPage">
      <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
        Copy
      </Typography>
      <div className="CopyPage__details">
        <div className="CopyPage__label">User ID</div>
        <div>{userId1}</div>
        <TooltipCustom
          behavior="click"
          content="Copied!"
          placement={matches ? "right" : "left"}>
          <Icon
            className={clsx("CopyPage__icon", {
              CopyPage__icon_active: hasCopied.userId1,
            })}
            type="Copy"
            onClick={() => handleCopy(userId1, "userId1")}
          />
        </TooltipCustom>
      </div>
      <br />
      <div className="CopyPage__details">
        <div className="CopyPage__label">User ID</div>
        <div>{userId2}</div>
        <TooltipCustom
          behavior="click"
          content="Copied!"
          placement={matches ? "right" : "left"}>
          <Icon
            className={clsx("CopyPage__icon", {
              CopyPage__icon_active: hasCopied.userId2,
            })}
            type="Copy"
            onClick={() => handleCopy(userId2, "userId2")}
          />
        </TooltipCustom>
      </div>
      <br />
      <p style={{ alignSelf: "flex-start" }}>
        Copied value: {value ?? "Nothing is copied yet!"}
      </p>
    </section>
  )
}
