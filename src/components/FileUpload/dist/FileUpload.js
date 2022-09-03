"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../button/Button");
var Input_1 = require("../input/Input");
var FileUpload = function () {
    var _a = react_1.useState(), selectedFile = _a[0], setSelectedFile = _a[1];
    var _b = react_1.useState(false), isFilePicked = _b[0], setIsFilePicked = _b[1];
    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    var changeHandler = function (event) {
        setSelectedFile((event.target).files[0]);
        // setIsSelected(true);
    };
    var handleSubmission = function (e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append('File', selectedFile);
        fetch('https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>', {
            method: 'POST',
            body: formData
        })
            .then(function (response) { return response.json(); })
            .then(function (result) {
            console.log('Success:', result);
        })["catch"](function (error) {
            console.error('Error:', error);
        });
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { className: 'flex items-center my-3' },
            react_1["default"].createElement("label", { className: "flex flex-col justify-center items-center w-full h-10 bg-[#F1F3FF] border-2 border-gray-300  cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 " },
                react_1["default"].createElement("div", { className: "flex flex-col justify-center items-start" },
                    react_1["default"].createElement("p", { className: "text-left" }, "Select an audio file")),
                react_1["default"].createElement(Input_1["default"], { type: "file", className: "hidden w-full" })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Button_1["default"], { type: 'submit', className: 'rounded-none bg-[#516CF5]', onClick: handleSubmission }, "Add Audio")))));
};
exports["default"] = FileUpload;
