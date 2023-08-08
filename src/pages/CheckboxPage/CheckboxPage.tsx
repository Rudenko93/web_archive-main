import React, { useState } from "react"
import type { ChangeEvent, FC } from "react"
import { Checkbox, ETypographyVariant, Typography } from "ui"
import "./CheckboxPage.scss"

type TParams = Record<string, any>

export const CheckboxPage: FC = () => {
  const idCheckbox = "00000000-0000-0000-0001"
  const [filter, setFilter] = useState<TParams>({ enabled: [] })

  const onChangeCheckedBox = (
    event: ChangeEvent<HTMLInputElement>,
    id: string,
    nameGroup: string
  ) => {
    const {
      target: { checked, value },
    } = event

    if (checked) {
      setFilter({
        ...filter,
        [nameGroup]: [...filter[nameGroup], value],
      })
    } else {
      setFilter({
        ...filter,
        [nameGroup]: [...filter[nameGroup].filter((x: string) => x !== value)],
      })
    }
  }

  return (
    <section className="CheckboxPage">
      <Typography align="start" as="h1" variant={ETypographyVariant.TextH1Bold}>
        Checkbox
      </Typography>
      <div>
        <Checkbox
          checked={filter && filter["enabled"].includes(idCheckbox)}
          id={idCheckbox}
          label={"enabled"}
          name={"enabled"}
          nameGroup={"enabled"}
          onChange={(event, id, nameGroup) =>
            onChangeCheckedBox(event, id, nameGroup)
          }
        />
      </div>

      <div className="CheckboxPage__value">
        <span>{JSON.stringify(filter, null, 2)}</span>
      </div>
    </section>
  )
}
