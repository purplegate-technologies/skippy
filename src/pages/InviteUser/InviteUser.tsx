import React, { useState } from 'react'

import InviteUsersForm from './InviteUsersForm'


const InviteUser = () => {
    const [email, setEmail] = useState("")
    const [items, setItems] = useState([])
    const [error, setError] = useState("")
    const [value, setValue] = useState("")

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <section className=''>
            <div className="max-w-2xl mx-auto">
                <InviteUsersForm />
            </div>
        </section>
    )
}

export default InviteUser
