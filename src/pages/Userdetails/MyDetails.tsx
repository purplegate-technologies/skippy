import React, { useState } from 'react'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'

const MyDetails = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:"",
        password: '',
        confirmPassword: ''
    }

    const [formValues, setFormValues] = useState(initialValues)

    const { firstName, lastName, email, phoneNumber, confirmPassword, password } = formValues

    const  handleChange  = (e: React.ChangeEvent<HTMLFormElement>) => {
        setFormValues({...formValues, [e.target.values]: e.target.name})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="max-w-3xl">
            <form onSubmit={handleSubmit} className="card -mb-5">
                <div className="grid md:grid-cols-2 gap-x-4 ">
                    <Input
                        labelStyle=""
                        divStyle="lable w-full"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label="FIRST NAME"
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleChange}
                        // onChange={(e: Event) => setFirstName((e.target as HTMLInputElement).value)}
                    />
                    <Input
                        divStyle="contactUs-form-lable"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label="SURNAME"
                        name="lastName"
                        placeholder="SURNAME"
                        value={lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-x-4">
                    <Input
                        divStyle="contactUs-form-lable"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label="EMAIL"
                        name="email"
                        placeholder="admin@skippy.com"
                        type="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <Input
                        divStyle="contactUs-form-lable"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label="MOBILE NUMBER"
                        name="phoneNumber"
                        placeholder="09039278115"
                        type="tel"
                        value={phoneNumber}
                        onChange={handleChange}
                    />

                </div>
                <div className="grid md:grid-cols-2 gap-x-4">
                    <Input
                        divStyle="contactUs-form-lable"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label="PASSWORD"
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <Input
                        divStyle="contactUs-form-lable"
                        className={"border-[#949AB1] border-1 rounded p-2 my-3 w-full"}
                        label="cONFRIM PASSWORD"
                        name="confirmPassword"
                        placeholder="Confrim Password"
                        type="password"
                        value={confirmPassword}
                        onChange={handleChange}
                    />

                </div>
                <Button className="mt-[2.5rem] mb-[2.36rem] capitalize bg-[#516CF5] " text="Save Changes" type="submit" />
            </form>
        </div>
    )
}

export default MyDetails
