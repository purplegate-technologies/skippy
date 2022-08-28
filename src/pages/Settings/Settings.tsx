import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/button/Button"
import DropDownInout from "../../components/DropDownInput/DropDownInput"
import Input from "../../components/input/Input"
import Switch from "../../components/switch/Switch"
import { useCreateAdminMutation } from "../../features/UserManagement/User ManagementApiSlcie"
import "./settings.css"

const options = [
    {value: '', text: 'Select Role', disabled: true},
    {value: 'admin', text: 'Super Admin 🍏'},
    {value: 'regular', text: 'Regular 🍌'},
    {value: 'normal', text: 'Normal Admin 🥝'},
    {value: 'others', text: 'Others 🥝'},
  ];


const Settings = () => {

    // const {data} = useCreateAdminMutation()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [roles, setRoles] = useState("Finances and billing")

    // const selectSTyle = {
    //     display: "block",
    //     width: "100%",
    //     borderRadius: "0.25rem",
    //     borderWidth: "2px",
    //     borderOpacity: 1,
    //     borderColor: "#949AB1",
    //     // --tw-bg-opacity: 1,
    //     backgroundColor: "white",
    //     padding: "0.5rem",
    //     outlineOffset: "2px",
    //     outlineWidth: 1,
    //     outlineColor: "transparent",
    //     outlineStyle: "solid",

    // }

    const navigate = useNavigate();

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setFirstName()
    }

    return (
        <>
            <form
                className={`h-full px-10 mx-auto flex justify-center items-center max-w-[1000px]`}
                onSubmit={HandleSubmit}>
                <div>
                    <div className="flex items-center justify-between my-5 ">
                        <h1 className="text-[#282828] text-3xl text-semibold">Create Administrator</h1>
                        <Link to="" onClick={() => navigate(-1)} className="text-[#516CF5]" >&#60; &#60; Back</Link>
                    </div>

                    <div className="card-settings">
                        {/* Select Roles */}
                        <div className="contactUs-form-lable">
                            <label htmlFor="" className="text-xs text-[#516CF5]">
                                {("ROLE")}
                            </label>
                            <DropDownInout
                           className="my-3"
                            placeholder="Select Role"
                            data={[
                                {label: 'admin', value: 'Super Admin 🍏'},
                                {label: 'regular', value: 'Regular 🍌'},
                                {label: 'normal', value: 'Normal Admin 🥝'},
                                {label: 'others', value: 'Others 🥝'},
                              ]}
                            getValue={v => v.value.toString()}
                            />

                            {/* <select
                            placeholder="Select Role"
                            style={selectSTyle}
                            name={roles}
                            onChange={(e) => {
                                const select = e.target as HTMLSelectElement
                                setRoles(select.options.item(select.selectedIndex)?.innerText!)
                            }}
                            >
                            {options.map(option => (
                                <option
                                    disabled={option.disabled}
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.text}
                                </option>
                                ))}
                            </select> */}
                            {/* <select
                                placeholder="Select Role"
                                style={selectSTyle}
                                name={roles}
                                id=""
                                // className="bg-white text-[#949AB1] border-[#949AB1] outline-none border-2 rounded p-2 mb-3 w-full"
                                onChange={(e) => {
                                    const select = e.target as HTMLSelectElement
                                    setRoles(select.options.item(select.selectedIndex)?.innerText!)
                                }}>
                                <option disabled className="text-[#949AB1]">
                                    {("Select Role")}
                                </option>
                                <option value="admin">
                                    {("Super Admin")}
                                </option>
                                <option value="normal">
                                    {("Normal Admin")}
                                </option>
                                <option value="regular">
                                    {("Regular Admin")}
                                </option>
                                <option value="account">
                                    {("Bad Admin")}
                                </option>
                                <option value="other">
                                    {("Other")}
                                </option>
                            </select> */}
                        </div>


                        <div className="grid md:grid-cols-2 gap-x-4 ">
                            {/* <div className="flex justify-between gap-[2.8rem] mb-8"> */}
                            <Input
                                // divStyel="w-[19rem]contactUs-form-lable"
                                labelStyle=""
                                divStyel="lable w-full"
                                className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                                label={("FIRST NAME")}
                                name={"Firstname"}
                                placeholder={("First Name")}
                                value={firstName}
                                onChange={(e: Event) => setFirstName((e.target as HTMLInputElement).value)}
                            />
                            <Input
                                // divStyel="w-[19rem]contactUs-form-lable"
                                divStyel="contactUs-form-lable"
                                className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                                label={("SURNAME")}
                                name="surname"
                                placeholder={("User Name")}
                                value={lastName}
                                onChange={(e: Event) => setLastName((e.target as HTMLInputElement).value)}
                            />
                        </div>

                        <div className="">
                            {/* <div className="flex flex-wrap justify-between gap-[2.8rem] mb-8"> */}
                            <Input
                                // divStyel="w-[19rem]contactUs-form-lable"
                                divStyel="contactUs-form-lable"
                                className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                                label={("EMAIL")}
                                name="email"
                                placeholder={("admin@skippy.com")}
                                type="email"
                                value={email}
                                onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                            />
                            <Input
                                // divStyel="w-[19rem]contactUs-form-lable"
                                divStyel="contactUs-form-lable"
                                className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                                label={("MOBILE NUMBER")}
                                name="mobile"
                                placeholder={("09039278115")}
                                type="tel"
                                value={mobile}
                                onChange={(e: Event) => setMobile((e.target as HTMLInputElement).value)}
                            />

                            <Switch label="Activate Account"  />
                            <Button className="mt-[2.5rem] mb-[2.36rem] capitalize bg-[#516CF5] " text="Save Changes" type="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Settings
