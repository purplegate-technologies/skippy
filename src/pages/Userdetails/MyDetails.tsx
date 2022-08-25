import React, { useState } from 'react'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'

const MyDetails = () => {

    const initialValues = {
        firstName: '',
        surname: '',
        email: '',
        phoneNumber:"",
        password: '',
        confirmPassword: ''
    }

    const [formValues, setFormValues] = useState(initialValues)
    // const [firstName, setFirstName] = useState("")
    // const [surname, setLastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [phoneNumber, setPhoneNumber] = useState("")
    // const [roles, setRoles] = useState("Finances and billing")

    const { firstName, surname, email, phoneNumber, confirmPassword, password } = formValues

    const  handleChange  = (e: React.ChangeEvent<HTMLFormElement>) => {
        setFormValues({...formValues, [e.target.values]: e.target.name})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="max-w-3xl">
            <form onSubmit={handleSubmit} className="card -mb-5">
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
                        onChange={handleChange}
                        // onChange={(e: Event) => setFirstName((e.target as HTMLInputElement).value)}
                    />
                    <Input
                        // divStyel="w-[19rem]contactUs-form-lable"
                        divStyel="contactUs-form-lable"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label={("SURNAME")}
                        name="surname"
                        placeholder={("User Name")}
                        value={surname}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-x-4">
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
                        onChange={handleChange}
                    />
                    <Input
                        // divStyel="w-[19rem]contactUs-form-lable"
                        divStyel="contactUs-form-lable"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label={("MOBILE NUMBER")}
                        name="phoneNumber"
                        placeholder={("09039278115")}
                        type="tel"
                        value={phoneNumber}
                        onChange={handleChange}
                    />

                </div>
                <div className="grid md:grid-cols-2 gap-x-4">
                    {/* <div className="flex flex-wrap justify-between gap-[2.8rem] mb-8"> */}
                    <Input
                        // divStyel="w-[19rem]contactUs-form-lable"
                        divStyel="contactUs-form-lable"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label={("Password")}
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <Input
                        // divStyel="w-[19rem]contactUs-form-lable"
                        divStyel="contactUs-form-lable"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label={("MOBILE NUMBER")}
                        name="confirmPassword"
                        placeholder={("09039278115")}
                        type="password"
                        value={confirmPassword}
                        onChange={handleChange}
                    />

                </div>
                <Button className="mt-[2.5rem] mb-[2.36rem] capitalize" text="Save Changes" type="submit" />
            </form>
        </div>
    )
}

export default MyDetails
