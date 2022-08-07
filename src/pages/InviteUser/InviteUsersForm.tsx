// import React, { Component } from 'react'
// import "./styles.css"
// export default class ClassInviteUsers extends Component {

//     state = {
//         items: [],
//         value: "",
//         error: null
//       };
//       handleKeyDown = (evt: React.FocusEvent<HTMLFormElement | any>) => {
//         if (["Enter", "Tab", ","].includes(evt.key)) {
//           evt.preventDefault();

//           var value = this.state.value.trim();

//           if (value && this.isValid(value)) {
//             this.setState({
//               items: [...this.state.items, this.state.value],
//               value: ""
//             });
//           }
//         }
//       };

//       handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({
//           value: evt.target.value,
//           error: null
//         });
//       };

//       handleDelete = (item: any) => {
//         this.setState({
//           items: this.state.items.filter((i: number | any) => i !== item)
//         });
//       };

//       handlePaste = (evt: React.FormEvent<HTMLFormElement | any>) => {
//         evt.preventDefault();

//         var paste = evt.clipboardData.getData("text");
//         var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

//         if (emails) {
//           var toBeAdded = emails.filter((email: string) => !this.isInList(email));

//           this.setState({
//             items: [...this.state.items, ...toBeAdded]
//           });
//         }
//       };

//       isValid(email: string) {
//         let error = null;

//         if (this.isInList(email)) {
//           error = `${email} has already been added.`;
//         }

//         if (!this.isEmail(email)) {
//           error = `${email} is not a valid email address.`;
//         }

//         if (error) {
//           this.setState({ error });

//           return false;
//         }

//         return true;
//       }

//       isInList(email: string | any) {
//         return this.state.items.includes(email);
//       }

//       isEmail(email: string | any) {
//         return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
//       }

//       render() {
//         return (
//           <>
//             {this.state.items.map(item => (
//               <div className="tag-item" key={item}>
//                 {item}
//                 <button
//                   type="button"
//                   className="button"
//                   onClick={() => this.handleDelete(item)}
//                 >
//                   &times;
//                 </button>
//               </div>
//             ))}

//             <input
//               className={"input " + (this.state.error && " has-error")}
//               value={this.state.value}
//               placeholder="Type or paste email addresses and press `Enter`..."
//               onKeyDown={this.handleKeyDown}
//               onChange={this.handleChange}
//               onPaste={this.handlePaste}
//             />

//             {this.state.error && <p className="error-chip">{this.state.error}</p>}
//           </>
//         );
//       }
// }


import React, { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import "./styles.css"

const ClassInviteUsers = () => {
    const [tags, setTags] = useState<string[]>([]);
    const addTag = (e: any) => {

        if (e.key === "Enter") {
            if ((e.target as HTMLInputElement).value.length > 0) {
                e.preventDefault();
                setTags([...tags, (e.target as HTMLInputElement).value]);
                (e.target as HTMLInputElement).value = "";
            }
        }
    };
    const removeTag = (removedTag: string) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTags([])
    }
    return (

        <form className='max-w-sm bg-white p-10 h-1/2 rounded-md' onSubmit={HandleSubmit}>
            <h1 className='text-[#282828] text-3xl font-bold'>Invite People</h1>
            <p className="text-[#949AB1] text-base">Enter email address(s) to invite</p>

            <label className="block text-[#516CF5] mt-5">Email</label>
            <div className="tag-container">
                {tags.map((tag, index) => {
                    return (
                        <div key={index} className="tag">
                            {tag} <span className="text-[#516CF5] font-bold" onClick={() => removeTag(tag)}>x</span>
                        </div>
                    );
                })}

                {/* <Input required className="input" type="email" placeholder="Type or paste email addresses and press `Enter`..." onKeyDown={addTag} /> */}
                <div>
                    <input type="email" placeholder="Type or paste email addresses and press `Enter`..." onKeyDown={addTag} />
                </div>
            </div>
            <div className="flex items-center justify-end mt-5">
                <Button type="submit" size='medium'>Send Invite</Button>
            </div>
        </form>
    )
}

export default ClassInviteUsers
