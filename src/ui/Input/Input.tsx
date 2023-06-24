import { forwardRef, memo, useState } from "react"
import type {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  FocusEvent,
} from "react"
import clsx from "clsx"
import { ETypographyVariant, FadeIn, Typography } from "ui"
import "./Input.scss"

export interface IInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  autoComplete?: string
  className?: string
  error?: string
  isFocused?: boolean
  isRequired?: boolean
  label?: string
  name?: string
  type?: string
  value?: string
}

const InputComponent = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      autoComplete,
      className,
      error,
      isFocused: isInputFocused,
      isRequired,
      label,
      name,
      type,
      onBlur,
      onChange,
      onFocus,
      ...rest
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [isFocused, setIsFocused] = useState<boolean | undefined>(
      isInputFocused
    )

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (event.target.value !== "") {
        setIsFocused(true)
      } else {
        setIsFocused(false)
      }

      if (onBlur) {
        onBlur(event)
      }
    }

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (!isFocused) {
        setIsFocused(true)
      }

      if (onFocus) {
        onFocus(event)
      }
    }

    return (
      <div
        className={clsx("InputField", className, {
          InputField__active: isFocused,
        })}>
        <div
          className={clsx("InputField-Inner", {
            "InputField-Inner_active": isFocused,
            "InputField-Inner_error": error,
          })}>
          <input
            className={clsx(className, "Input", {
              Input__active: isFocused,
              Input__error: error,
            })}
            autoComplete={autoComplete}
            name={name}
            type={type}
            ref={ref}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
        </div>

        {error && (
          <div className="InputField__errorField">
            <FadeIn>
              <Typography as="h3" variant={ETypographyVariant.TextB3Regular}>
                {error}
              </Typography>
            </FadeIn>
          </div>
        )}

        <div className="InputField__label">
          <Typography
            as="label"
            htmlFor={name}
            variant={
              !isFocused
                ? ETypographyVariant.TextB3Regular
                : ETypographyVariant.TextB4Regular
            }>
            {label}
          </Typography>
          {isRequired && <span className="InputField__labelRequired"> *</span>}
        </div>
      </div>
    )
  }
)

InputComponent.displayName = "InputComponent"

export const Input = memo(InputComponent)
