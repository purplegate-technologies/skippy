import React, { useState, useRef } from 'react'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import ClassInviteUsers from './ClassInviteUsers'


const InviteUser = () => {
    const [email, setEmail] = useState("")
    const [items, setItems] = useState([])
    const [error, setError] = useState("")
    const [value, setValue] = useState("")

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };


    // state = {
    //     items: [],
    //     value: "",
    //     error: null
    //   };

    //   const handleKeyDown = (evt: React.FormEvent<HTMLFormElement>) => {
    //     if (["Enter", "Tab", ","].includes(evt.key)) {
    //       evt.preventDefault();

    //       value.trim();

    //       if (value && this.isValid(value)) {
    //         setValue([...items, value])
    //         setItems("")
    //       }
    //     }
    //   };

    //   cnst handleChange = (evt: React.ChangeEvent<HTMLInputElement | any>) => {
    //     setValue(evt.target.value)
    //     setError("")
    //   };

    //   const handleDelete = item => {
    //     setItems(items.filter(i => i !== item))
    //   };

    //   const handlePaste = (evt: React.FormEvent<HTMLFormElement>) => {
    //     evt.preventDefault();

    //     var paste = evt.clipboardData.getData("text");
    //     var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

    //     if (emails) {
    //       var toBeAdded = emails.filter(email => !this.isInList(email));

    //       this.setState({
    //         items: [...this.state.items, ...toBeAdded]
    //       });
    //     }
    //   };




    return (
        <section className='flex items-center justify-center'>
            <div className="flex">
                <ClassInviteUsers />
            </div>
            {/* <div className="flex items-center justify-center bg-red m-auto">
                <form className='max-w-screen-lg bg-white m-auto h-1/2'>
                <h1 className='text-[#282828] text-3xl font-bold'>Invite People</h1>
                <p className="text=[#949AB1] text-sm">Enter email address(s) to invite</p>

                <Input
                        divStyel="contactUs-form-lable"
                        className={"border-[#E4E9FF] rounded p-2 my-3 w-full h-1/2" }
                        label={("EMAIL")}
                        name="email"
                        placeholder={("")}
                        type="email"
                        value={email}
                        required
                        onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                    />

                <div className="flex items-center justify-end">
                    <Button type="submit" size='medium'>Send Invite</Button>
                </div>
            </form>

            </div> */}
        </section>
    )
}

export default InviteUser
