import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/button/Button"
import Input from "../../components/input/Input"
import Switch from "../../components/switch/Switch"
import "./settings.css"

const Settings = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [roles, setRoles] = useState("Finances and billing")

    const selectSTyle = {

        display: "block",
        width: "100%",
        borderRadius: "0.25rem",
        borderWidth: "2px",
        borderOpacity: 1,
        borderColor: "rgba(229, 231, 235, 1)",
        // --tw-bg-opacity: 1,
        backgroundColor: "rgba(243, 244, 246, 1)",
        padding: "0.5rem",
        outlineOffset: "2px",
        outlineWidth: 1,
        outlineColor: "transparent",
        outlineStyle: "solid",
    }
    const navigate = useNavigate();

    return (
        <>
            <form
                className={`h-full px-10 mx-auto flex justify-center items-center max-w-[1000px]`}
                // onSubmit={HandleSubmit}>
                onSubmit={() => null}>
                <div>

                    <div className="flex items-center justify-between my-5 ">
                        <h1 className="text-[#282828] text-3xl text-semibold">Create Administrator</h1>
                        <Link to="" onClick={() => navigate(-1)} className="text-[#516CF5]" >&#60; &#60; Back</Link>
                    </div>

                    <div className="card-settings">
                        {/* Select Rol */}
                        <div className="contactUs-form-lable">
                            <label htmlFor="" className="text-xs text-[#516CF5]">
                                {("ROLE")}
                                <p className="text-[#EB0000] inline">{`*`}</p>
                            </label>
                            <select
                                // style={selectSTyle}
                                name=""
                                id=""
                                className="text-[#949AB1] border-[#949AB1] outline-none border-2 rounded p-2 mb-3 w-full"
                                onChange={(e) => {
                                    const select = e.target as HTMLSelectElement
                                    setRoles(select.options.item(select.selectedIndex)?.innerText!)
                                }}>
                                <option value="Finances and billing">
                                    {("ROLE ONE")}
                                </option>
                                <option value="Managing my tickets">
                                    {("ROLE TWO")}
                                </option>
                                <option value="Managing my listings">
                                    {("ROLE THREE")}
                                </option>
                                <option value="My PASSTickets account">
                                    {("ROLE FOUR")}
                                </option>
                                <option value="Other">
                                    {("ROLE FIVE")}
                                </option>
                            </select>
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
                                requiredMsg="*"
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
                                requiredMsg="*"
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
                                requiredMsg="*"
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
                                requiredMsg="*"
                                value={email}
                                onChange={(e: Event) => setMobile((e.target as HTMLInputElement).value)}
                            />

                            <Switch label="Activate Account" />
                            <Button className="mt-[2.5rem] mb-[2.36rem] capitalize" text="Save Changes" type="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Settings
