// import InputErrorMsg from "./InputErrorMsg";
// import "./basicselect.css";
// import {useFormContext} from "react-hook-form";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const BasicSelect = ""
// ({
//   id,
//   name,
//   errMsg,
//   className,
//   required = true,
//   selectOption,
//   label,
//   isDisabled,
//   handleCustomChange,
// }) => {
//   const {
//     register,
//     formState: {errors},
//   } = useFormContext();

//   return (
//     <div className={`form-group ${className}`}>
//       {label && <label htmlFor={id || name}>{label}</label>}
//       <div className={`input-icon-wrap select-wrap`}>
//         <select
//           id={id || name}
//           {...register(name, {
//             required: required ? true : false,
//             onChange: e => (handleCustomChange ? handleCustomChange(e) : null),
//           })}
//           name={name}
//         >
//           {selectOption.map(item => {
//             return (
//               <option key={item.value} value={item.value}>
//                 {item.label}
//               </option>
//             );
//           })}
//         </select>
//         <button disabled type="button" className="icon icon-right">
//           <KeyboardArrowDownIcon />
//         </button>
//       </div>

//       {errMsg && errors[name] && <InputErrorMsg errMsg={errMsg} />}
//     </div>
//   );
// };

export default BasicSelect;