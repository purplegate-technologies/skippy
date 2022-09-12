import React from "react";
import { toast } from "react-toastify";
// import { toastMessage } from "../../entities";
// import { generateId } from "../../utils";
// const id = generateId();

interface PropTypes {
  label?: string;
  value?: string;
  onChange?: Function;
  placeholder?: string;
  required?: boolean;
  options?: string[] | { name: string; value: string }[];
  disabled?: boolean;
  canNotEdit?: boolean;
  selectedOption?: string;
  className?: string
}
export const Select = ({
  label = "",
  placeholder = "Select",
  value,
  required = true,
  onChange = () => {},
  options = [],
  disabled = false,
  canNotEdit = false,
  selectedOption,
  className
}: PropTypes) => {
  return (
    <div className={`space-y-2 flex flex-col ${disabled && "opacity-60"}`}>
      <label className="text-sm font-medium uppercase mb-[0.625rem] text-[#0F3057]">
        {label}
      </label>
      <div
        onClick={
          disabled && canNotEdit
            // ? () => toastMessage("contact support@ezeevoucher.com", "error")
            ? () => toast.error( "error")
            : () => {}
        }
        className="  text-sm md:text-base"
      >
        <select
          value={value}
          defaultValue={value}
        //   id={id}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value) || onChange}
          className={`${className}  focus:outline-none w-full md:auto bg-white`}
          required={required}
        >
          <option value="" disabled>
            {placeholder || "Select"}
          </option>
          {options.map(
            (
              option: string | { name: string; value: string },
              optionIndex: number
            ) => (
              <option
                // key={`${id}-option_${optionIndex}`}
                className="p-4"
                key={`-option_${optionIndex}`}
                value={typeof option === "string" ? option : option.value}
              >
                {typeof option === "string" ? option : option.name}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

// export default Select;
