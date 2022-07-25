import React, { ReactElement, MouseEvent } from "react"

// Form type

export interface IFormType {
    input?: string
    error?: string
}

export const initInput: IFormType = { input: "", error: "" }


interface Iprops {
    type?: "text" | "email" | "password" | "date" | "radio" | "tel" | "number"
    label?: string
    value?: string
    placeholder?: string
    name?: string
    children?: ReactElement
    onChange?: Function
    onBlur?: Function
    onClick?: Function
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
    minLength?: number
    maxLength?: number
}

const Input = ({
    type = "text",
    label = "lable",
    value = "",
    placeholder = "Placeholder",
    name = "name",
    children,
    onChange = () => {},
    onBlur = () => {},
    onClick = () => {},
    onKeyPress = () => {},
    required = true,
    requiredMsg = "",
    error = "",
    disabled = false,
    className = "",
    checked = false,
    divStyel = "",
    maxLength,
    minLength,
}: Iprops) => {
    
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
            onKeyPress={(e) => onClick(e)}
            disabled={disabled}
            checked={checked}
            maxLength={maxLength}
            minLength={minLength}
        />
    )

    // function changeGender(e: MouseEvent<HTMLDivElement>) {
    //   const inputElemet = (e.target as HTMLElement).parentElement?.children[0];
    //   inputElemet?.setAttribute("checked", "");

    // }

    if (type === "radio") {
        return (
            <div
                className={
                    "inline-block mr-5 select-none" + (error && "error")
                }>
                {input}
                <label htmlFor={name} className={`${("margin_rightLeft")}-2`}>
                    {`${label}`}
                </label>
                {/* <label htmlFor={name} className={`${t("margin_rightLeft")}-2`}>
                    {`${label}`}
                </label> */}

                <span>{error}</span>
            </div>
        )
    }

    return (
        <div className={`form-input  ${divStyel} ` + (error && "error")}>
            <label htmlFor={name} className="block mb-1">
                {label}{" "}
                <p className="text-[#EB0000] inline">{`${requiredMsg}`}</p>
            </label>

            {input}

            <span>{error}</span>
        </div>
    )
}

export default Input