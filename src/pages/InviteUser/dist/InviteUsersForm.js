"use strict";
// import React, { Component } from 'react'
// import "./styles.css"
// export default class ClassInviteUsers extends Component {
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
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
var react_1 = require("react");
var Button_1 = require("../../components/button/Button");
require("./styles.css");
var ClassInviteUsers = function () {
    var _a = react_1.useState([]), tags = _a[0], setTags = _a[1];
    var addTag = function (e) {
        if (e.key === "Enter") {
            if (e.target.value.length > 0) {
                e.preventDefault();
                setTags(__spreadArrays(tags, [e.target.value]));
                e.target.value = "";
            }
        }
    };
    var removeTag = function (removedTag) {
        var newTags = tags.filter(function (tag) { return tag !== removedTag; });
        setTags(newTags);
    };
    var HandleSubmit = function (e) {
        e.preventDefault();
        setTags([]);
    };
    return (react_1["default"].createElement("form", { className: 'bg-white p-10 h-1/2 rounded-md', onSubmit: HandleSubmit },
        react_1["default"].createElement("h1", { className: 'text-[#282828] text-3xl font-bold' }, "Invite People"),
        react_1["default"].createElement("p", { className: "text-[#949AB1] text-base" }, "Enter email address(s) to invite"),
        react_1["default"].createElement("label", { className: "block text-[#516CF5] mt-5" }, "Email"),
        react_1["default"].createElement("div", { className: "tag-container" },
            tags.map(function (tag, index) {
                return (react_1["default"].createElement("div", { key: index, className: "tag" },
                    tag,
                    " ",
                    react_1["default"].createElement("span", { className: "text-[#516CF5] font-bold", onClick: function () { return removeTag(tag); } }, "x")));
            }),
            react_1["default"].createElement("div", { className: "w-full" },
                react_1["default"].createElement("input", { type: "email", placeholder: "Type or paste email addresses and press `Enter`...", onKeyDown: addTag }))),
        react_1["default"].createElement("div", { className: "flex items-center justify-end mt-5" },
            react_1["default"].createElement(Button_1["default"], { type: "submit", size: 'medium' }, "Send Invite"))));
};
exports["default"] = ClassInviteUsers;
