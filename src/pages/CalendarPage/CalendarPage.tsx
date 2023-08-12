import { addDays, format, subDays } from "date-fns"

import { useCallback, useState } from "react"
import type { FC } from "react"
import { Calendar, ETypographyVariant, Typography } from "ui"
import { enUS } from "date-fns/locale"
import "./CalendarPage.scss"

export const CalendarPage: FC = () => {
  // Calendar
  const [valueCalendar, setValueCalendar] = useState<TCalendarValue>(new Date())
  const formattedValueCalendar =
    valueCalendar && !Array.isArray(valueCalendar)
      ? format(valueCalendar, "dd.MM.yyyy", { locale: enUS })
      : ""

  return (
    <section className="CalendarPage">
      <Typography align="start" as="h1" variant={ETypographyVariant.TextH1Bold}>
        Calendar
      </Typography>
      <Calendar
        locale={enUS.code}
        onChange={setValueCalendar}
        value={valueCalendar}
      />
      <pre>{JSON.stringify(formattedValueCalendar, null, 2)}</pre>
    </section>
  )
}
