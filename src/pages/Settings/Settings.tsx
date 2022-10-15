import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Button from "../../components/button/Button"
import DropDownInout from "../../components/DropDownInput/DropDownInput"
import Input from "../../components/input/Input"
import { Select } from "../../components/Select/Select"
import Switch from "../../components/switch/Switch"
import { useCreateAdminMutation } from "../../features/UserManagement/User ManagementApiSlcie"
import "./settings.css"

const options = [
    { value: '', text: 'Select Role', disabled: true },
    { value: 'admin', text: 'admin' },
    { value: 'regular', text: 'Regular 🍌' },
    { value: 'normal', text: 'Normal Admin 🥝' },
    { value: 'others', text: 'Others 🥝' },
];

interface initialStateType {
    firstName?: string,
    lastName?: string,
    email?: string,
    mobile?: string,
    type?: string
}

const initialState: initialStateType = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    type: "",
}

const Settings = () => {

    const [createAdmin, { isSuccess, isLoading }] = useCreateAdminMutation()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [type, setRoles] = useState("")

    useEffect(() => {
        if (isSuccess) {
            toast.success("Created an Administrator successfully");
        }

    }, [isSuccess]);

    const selectSTyle = {
        display: "block",
        width: "100%",
        borderRadius: "0.25rem",
        borderWidth: "2px",
        borderOpacity: 1,
        borderColor: "#949AB1",
        // --tw-bg-opacity: 1,
        backgroundColor: "white",
        padding: "0.5rem",
        outlineOffset: "2px",
        outlineWidth: 1,
        outlineColor: "transparent",
        outlineStyle: "solid",
        marginBottom: "0.75rem",
        marginTop: '0.75rem'

    }

    const navigate = useNavigate();

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (firstName && lastName && email && mobile && type) {
                await createAdmin({
                    firstName, lastName, email, mobile, type
                }).unwrap()

                setFirstName('')
                setLastName('')
                setEmail('')
                setMobile('')
                setRoles('')
            }
        } catch {
            toast.error("Failed Please Try again")
        }

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
                        <div className="contactUs-form-lable">
                            {/* <Select
                            label="ROLE"
                            placeholder="Select Role"
                            required
                            value={type}
                            options={['admin', 'normal', 'bad']}
                            className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                            onChange={(e: any) => setRoles(e.atrget.options)}

                            // onChange={(e: any) => {
                            //     const select = e.target as HTMLSelectElement
                            //     setRoles(selec[t.options.item(select.selectedIndex)?.innerText!)]
                            // }}
                            /> */}

                            <label htmlFor="" className="text-xs text-[#516CF5]">ROLE</label>

                            <select
                                placeholder="Select Role"
                                defaultValue={type}
                                style={selectSTyle}
                                required
                                name={type}
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
                                        <div   className="bg-[#516CF5] py-4" >
                                        {option.text}
                                        </div>
                                    </option>
                                ))}
                            </select>
                            {/* <Select
                                // label="Your role in the chair"
                                className="border-[#949AB1] border-2 rounded w-full p-2 my-3"
                                options={["active", "inactive"]}
                                required
                                value={type}
                                //   onChange={(value: any) => setField("status", value)}
                                onChange={(e: any) => setRoles(e.target.value)}
                            /> */}
                        </div>


                        <div className="grid md:grid-cols-2 gap-x-4 ">
                            <Input
                                labelStyle=""
                                divStyle="lable w-full"
                                className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                                label={("FIRST NAME")}
                                name={"Firstname"}
                                placeholder={("First Name")}
                                value={firstName}
                                onChange={(e: Event) => setFirstName((e.target as HTMLInputElement).value)}
                            />
                            <Input
                                divStyle="contactUs-form-lable"
                                className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                                label={("SURNAME")}
                                name="surname"
                                placeholder={("Surname")}
                                value={lastName}
                                onChange={(e: Event) => setLastName((e.target as HTMLInputElement).value)}
                            />
                        </div>

                        <div className="">
                            <Input
                                divStyle="contactUs-form-lable"
                                className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                                label={("EMAIL")}
                                name="email"
                                placeholder={("admin@skippy.com")}
                                type="email"
                                value={email}
                                onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                            />
                            <Input
                                divStyle="contactUs-form-lable"
                                className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                                label={("MOBILE NUMBER")}
                                name="mobile"
                                placeholder={("09039278115")}
                                type="tel"
                                value={mobile}
                                onChange={(e: Event) => setMobile((e.target as HTMLInputElement).value)}
                            />

                            <Switch label="Activate Account" />
                            <Button loading={isLoading} className="mt-[2.5rem] mb-[2.36rem] capitalize bg-[#516CF5] " text="Save Changes" type="submit" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Settings
