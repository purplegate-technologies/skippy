"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var CompanyLogo_1 = require("../../assets/svg/CompanyLogo");
var Button_1 = require("../../components/button/Button");
var FileUpload_1 = require("../../components/FileUpload/FileUpload");
var TopNav_1 = require("../../components/topnav/TopNav");
var DeleteAdsIcon_1 = require("./DeleteAdsIcon");
var EditAdsIcon_1 = require("./EditAdsIcon");
var SnapAdsIcon_1 = require("./SnapAdsIcon");
var VideoSlider_1 = require("./VideoSlider");
var react_select_1 = require("react-select");
var options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
var CreateAderts = function () {
    var _a = react_1.useState(null), selectedOption = _a[0], setSelectedOption = _a[1];
    var handleChangeSeelect = function (val) {
        setSelectedOption(val);
    };
    var _b = react_1.useState("Scene"), tabIndex = _b[0], setTabIndex = _b[1];
    var _c = react_1.useState("Add"), tabIndexText = _c[0], setTabIndexText = _c[1];
    var _d = react_1.useState("Finances and billing"), roles = _d[0], setRoles = _d[1];
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("section", { className: "bg-[#FCFCFF]" },
        react_1["default"].createElement("div", { className: 'flex' },
            react_1["default"].createElement("div", { className: "sidebar__logo" },
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                    react_1["default"].createElement(CompanyLogo_1["default"], null)),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/", style: { textDecoration: 'none', color: 'black', marginLeft: '8px' } }, "Admin@skippy.com"),
                react_1["default"].createElement("div", { className: 'h-10' })),
            react_1["default"].createElement("div", { className: "flex-1" },
                react_1["default"].createElement(TopNav_1["default"], null))),
        react_1["default"].createElement("div", { className: "grid md:grid-cols-7 gap-10 m-5" },
            react_1["default"].createElement("div", { className: 'md:basis-1/2 flex flex-col bg-white col-span-4' },
                react_1["default"].createElement(VideoSlider_1["default"], null),
                react_1["default"].createElement(FileUpload_1["default"], null),
                react_1["default"].createElement(Button_1["default"], { className: "w-full border-[#516CF5] mt-10 border border-dashed bg-white text-[#516CF5]" }, "\u00A0\u00A0Add\u00A0a\u00A0Scene")),
            react_1["default"].createElement("div", { className: 'md:basis-1/2 flex flex-col bg-white col-span-3' },
                react_1["default"].createElement("div", { className: "" },
                    react_1["default"].createElement("div", { className: " flex h-full borderitems-center flex-row border-[#F1F3FF] text-[#949AB1] relative" },
                        react_1["default"].createElement("p", { className: "tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Scene" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]"), onClick: function () { return setTabIndex("Scene"); } },
                            "Scene",
                            " "),
                        react_1["default"].createElement("p", { className: "tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Ad Settings" && " text-[#516CF5] border-t-2 border-t-[#516CF5]"), onClick: function () { return setTabIndex("Ad Settings"); } }, "Ad\u00A0Settings"))),
                tabIndex === "Scene" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: 'bg-white border p-3' },
                        react_1["default"].createElement("div", { className: "flex-items-center flex-row justify-between my-2", style: { display: 'flex', justifyContent: 'space-between' } },
                            react_1["default"].createElement("p", null, "Brand Details"),
                            react_1["default"].createElement("p", { className: "bg-[#EAEDFE] text-[#516CF5] rounded-full p-1 px-2 text-sm" }, "Internal")),
                        react_1["default"].createElement("div", { className: "flex items-center gap-x-5 mb-2" },
                            react_1["default"].createElement("div", { className: "h-20 w-20 bg-blue-400" }),
                            react_1["default"].createElement("div", { className: "flex flex-1 w-full" },
                                react_1["default"].createElement("div", { className: "w-full" },
                                    react_1["default"].createElement("label", { className: 'my-1 text-[#171837]' }, "Brand name/Ad Title "),
                                    react_1["default"].createElement("input", { type: 'text', name: '', className: 'flex flex-1 w-full p-2 border border-[#949AB1] rounded' })))),
                        react_1["default"].createElement("div", { className: "flex items-center gap-x-5 my-5" },
                            react_1["default"].createElement("img", { src: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp", className: "h-20 w-20", alt: "" }),
                            react_1["default"].createElement("div", { className: "flex flex-col gap-y-2" },
                                react_1["default"].createElement("h1", { className: "text-[#171837] font-bold text-lg" }, "Scene 1"),
                                react_1["default"].createElement("div", { className: "flex items-center gap-x-3" },
                                    react_1["default"].createElement(EditAdsIcon_1["default"], { className: 'cursor-pointer' }),
                                    react_1["default"].createElement(SnapAdsIcon_1["default"], { className: 'cursor-pointer' }),
                                    react_1["default"].createElement(DeleteAdsIcon_1["default"], { className: 'cursor-pointer' })))),
                        react_1["default"].createElement("div", { className: "flex items-center justify-between  flex-1 lg:mt-auto mt-10 rounded-lg" },
                            react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2 cursor-pointer " + (tabIndexText === "Add" && "text-[#516CF5] border-2 border-[#516CF5]"), onClick: function () { return setTabIndexText("Add"); } },
                                react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[28px]' }, "A+"),
                                react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Add Text")),
                            react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2 cursor-pointer" + (tabIndexText === "Edit" && "text-[#516CF5] border-2 border-[#516CF5]"), onClick: function () { return setTabIndexText("Edit"); } },
                                react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[28px]' }, "30"),
                                react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Edit Scene")),
                            react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2 cursor-pointer" + (tabIndexText === "Back" && "text-[#516CF5] border-2 border-[#516CF5]"), onClick: function () { return setTabIndexText("Back"); } },
                                react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[28px]' }, "Rec"),
                                react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Background"))),
                        tabIndexText === "Add" && react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("div", { className: "" },
                                react_1["default"].createElement("h1", { className: "text-[#171837] font-bold text-lg block" }, "Text Setup"),
                                react_1["default"].createElement("div", { className: "flex " },
                                    react_1["default"].createElement("div", { className: 'flex my-2 flex-1' },
                                        react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'text', name: 'ddd', className: " p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" }))),
                                react_1["default"].createElement("div", { className: "flex items-center gap-x-5 my-3 w-full justify-evenly" },
                                    react_1["default"].createElement("div", { className: "contactUs-form-lable flex flex-col w-full" },
                                        react_1["default"].createElement("label", { htmlFor: "", className: "text-xs my-1 text-[#516CF5]" }, "Position"),
                                        react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, onChange: handleChangeSeelect, options: options })),
                                    react_1["default"].createElement("div", { className: "contactUs-form-lable flex flex-col w-full" },
                                        react_1["default"].createElement("label", { htmlFor: "", className: "text-xs my-1 text-[#516CF5]" }, "Text style"),
                                        react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, onChange: function (e) {
                                                var _a;
                                                var select = e.target;
                                                setRoles((_a = select.options.item(select.selectedIndex)) === null || _a === void 0 ? void 0 : _a.innerText);
                                            }, options: options }))),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("p", null, "Animation")))),
                        tabIndexText === "Edit" && react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: "flex  gap-x-4 mb-2 p-2" },
                                    react_1["default"].createElement("div", { className: "flex flex-col flex-1 items-start" },
                                        react_1["default"].createElement("div", { className: "w-full" },
                                            react_1["default"].createElement("label", { className: 'my-1 text-[#171837]' }, "Duration "),
                                            react_1["default"].createElement("input", { type: 'text', name: '', className: 'flex flex-1 w-full p-2 border border-[#949AB1] rounded' })),
                                        react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, onChange: handleChangeSeelect, options: options, className: "w-full my-2" }),
                                        react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, onChange: handleChangeSeelect, options: options, className: "w-full my-2" })),
                                    react_1["default"].createElement("div", { className: "flex flex-col flex-1 w-full" },
                                        react_1["default"].createElement("div", { className: "h-40 w-full flex bg-blue-400 rounded-sm" }))))),
                        tabIndexText === "Back" && react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", null, "Background Colour"),
                                react_1["default"].createElement("div", { className: " " },
                                    react_1["default"].createElement("div", { className: "flex border rounded-lg p-2 my-3" },
                                        react_1["default"].createElement("p", null, "Background HEX-Code "),
                                        react_1["default"].createElement("div", { className: 'flex my-2 flex-1' },
                                            react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'color', name: 'ddd', className: " p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" }))))))))),
                tabIndex !== "Scene" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "bg-white border p-3" },
                        react_1["default"].createElement("h1", { className: "text-[#171837] font-bold text-lg block" }, "Embed Code"),
                        react_1["default"].createElement("div", { className: "flex" },
                            react_1["default"].createElement("div", { className: 'flex my-2 flex-1 w-full' },
                                react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'text', name: 'ddd', className: " p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" })))))))),
        react_1["default"].createElement("div", { className: "flex  items-center justify-between bg-[#FCFCFF] border-[#F1F3FF] border p-5  w-[100%]" },
            react_1["default"].createElement("div", { className: "gap-x-3 flex" },
                react_1["default"].createElement(Button_1["default"], { className: "bg-[#949AB1]" }, "Undo Changes"),
                react_1["default"].createElement(Button_1["default"], { className: "bg-[#FF5660]" }, "Delete Advert")),
            react_1["default"].createElement("div", { className: "gap-x-3 flex" },
                react_1["default"].createElement(Button_1["default"], { className: 'bg-[#868BA1] ', onClick: function () { return navigate(-1); } }, "Cancel"),
                react_1["default"].createElement(Button_1["default"], { className: 'bg-[#19C165]' }, "Save Changes")))));
};
exports["default"] = CreateAderts;
