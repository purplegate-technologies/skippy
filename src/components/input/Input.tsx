import React, { ReactElement, MouseEvent } from "react"

// Form type

export interface IFormType {
    input?: string
    error?: string
}

export const initInput: IFormType = { input: "", error: "" }
interface InputIconProps {
    TrailingIcon?: () => JSX.Element
    Loadingicon? : () => JSX.Element
}


interface Iprops {
    type?: "text" | "email" | "password" | "date" | "radio" | "tel" | "number" | "search" | "file"
    label?: string
    value?: string
    placeholder?: string
    name?: string
    children?: ReactElement
    onChange?: Function
    onBlur?: Function
    onClick?: Function
    onKeyDown?: Function
    onKeyPress?: Function
    required?: boolean
    requiredMsg?: string
    error?: string
    disabled?: boolean
    additionalInfo?: string
    className?: string
    autoCorrect?: boolean
    full?: boolean
    checked?: boolean
    divStyel?: string
    labelStyle?: string
    minLength?: number
    maxLength?: number
    TrailingIcon?: Function | any
}

const Input = ({
    type = "text",
    label = "",
    value = "",
    placeholder = "Placeholder",
    name = "name",
    children,
    onChange = () => { },
    onBlur = () => { },
    onClick = () => { },
    onKeyPress = () => { },
    onKeyDown = () => { },
    required = true,
    requiredMsg = "",
    error = "",
    disabled = false,
    className = "",
    checked = false,
    divStyel = "",
    labelStyle = "",
    maxLength,
    minLength,
    TrailingIcon = null

}: Iprops & InputIconProps) => {

    const input = (
        <input
            className={className}
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            required={required}
            onChange={(e) => onChange(e)}
            onBlur={(e) => onBlur(e)}
            onClick={(e) => onClick(e)}
            onKeyDown={(e) => onClick(e)}
            onKeyPress={(e) => onClick(e)}
            disabled={disabled}
            checked={checked}
            maxLength={maxLength}
            minLength={minLength}
            // TrailingIcon={TrailingIcon}
        />
    )

    // function changeGender(e: MouseEvent<HTMLDivElement>) {
    //   const inputElemet = (e.target as HTMLElement).parentElement?.children[0];
    //   inputElemet?.setAttribute("checked", "");

    // }

    if (type === "radio") {
        return (
            <div className={"inline-block mr-5 select-none" + (error && "error")}>{input}
                <label htmlFor={name} className={labelStyle}>{`${label}`}</label>
                {/* <label htmlFor={name} className={`${t("margin_rightLeft")}-2`}>
                    {`${label}`}
                </label> */}
                <span>{error}</span>
            </div>
        )
    }

    return (
        <div className={`form-input  ${divStyel} ` + (error && "error")}>
            <label htmlFor={name} className={`block text-xs text-[#516CF5]  ${labelStyle}`}>
                {label}{" "}
                <p className="text-[#EB0000] inline">{`${requiredMsg}`}</p>
            </label>
            {input}
            <span>{error}</span>
        </div>
    )
}

export default Input
