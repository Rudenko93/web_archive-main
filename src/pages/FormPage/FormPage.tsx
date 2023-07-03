import type { FC } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input, PhoneInputMask } from "services/form"
import { Button, ETypographyVariant, Typography } from "ui"
import { EFormFields } from "enums"
import { formSchema } from "./schemas"
import "./FormPage.scss"

export const FormPage: FC = () => {
  const resolver = zodResolver(formSchema)
  const methods = useForm({ resolver })

  const onSubmit = (data: any) => {
    console.log("submit event: ", data)
  }

  return (
    <section className="FormPage">
      <div className="FormPage-Inner">
        <div className="FormPage-Content">
          <h2 className="FormPage-Title">
            <Typography as="h1" variant={ETypographyVariant.TextH1Bold}>
              Form
            </Typography>
          </h2>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="FormPage-FormFieldGroup">
                <Input label="Name" name={EFormFields.Name} type="text" />
                <Input label="Email" name={EFormFields.Email} type="text" />
                <PhoneInputMask label="Mobile phone" name={EFormFields.Phone} />
                <Input
                  label="Password"
                  name={EFormFields.Password}
                  type="text"
                />
                <Input
                  label="Password confirmation"
                  name={EFormFields.RePassword}
                  type="text"
                />
              </div>
              <div className="FormPage-Control">
                <Button className="FormPage-Button" typeButton="submit">
                  <Typography
                    as="h3"
                    variant={ETypographyVariant.TextB3Regular}>
                    Send
                  </Typography>
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  )
}
