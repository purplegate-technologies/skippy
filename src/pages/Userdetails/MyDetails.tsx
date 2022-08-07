import React, { useState } from 'react'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'

const MyDetails = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [roles, setRoles] = useState("Finances and billing")

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

                </div>
                <Button className="mt-[2.5rem] mb-[2.36rem] capitalize" text="Save Changes" type="submit" />
            </form>
        </div>
    )
}

export default MyDetails
