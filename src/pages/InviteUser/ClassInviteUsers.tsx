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


import { useState } from "react";
import Input from "../../components/input/Input";
import "./styles.css"

const ClassInviteUsers = () => {
    const [tags, setTags] = useState<string[]>(["please", "do not"]);
    const addTag = (e: any) => {

        if (e.key === "Enter") {
            if ((e.target as HTMLInputElement).value.length > 0) {
                e.preventDefault();
                setTags([...tags, (e.target as HTMLInputElement).value]);
                (e.target as HTMLInputElement).value = "";
            }
        }
    };
    const removeTag = (removedTag: any) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };
    return (

        <form className='max-w-screen-lg bg-white m-auto h-1/2'>
            <h1 className='text-[#282828] text-3xl font-bold'>Invite People</h1>
            <p className="text=[#949AB1] text-sm">Enter email address(s) to invite</p>

            <h1>Tags input with React</h1>
            <div className="tag-container">
                {tags.map((tag, index) => {
                    return (
                        <div key={index} className="tag">
                            {tag} <span onClick={() => removeTag(tag)}>x</span>
                        </div>
                    );
                })}

                <input  placeholder="" onKeyDown={addTag} />
            </div>
        </form>
    )
}

export default ClassInviteUsers
