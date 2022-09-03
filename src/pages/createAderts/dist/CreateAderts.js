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
var CreateAderts = function () {
    var _a = react_1.useState("Scene"), tabIndex = _a[0], setTabIndex = _a[1];
    var _b = react_1.useState("Finances and billing"), roles = _b[0], setRoles = _b[1];
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
                        react_1["default"].createElement("div", { className: "flex items-center gap-x-5 my-5" },
                            react_1["default"].createElement("img", { src: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp", className: "h-20 w-20", alt: "" }),
                            react_1["default"].createElement("div", { className: "flex flex-col gap-y-2" },
                                react_1["default"].createElement("h1", { className: "text-[#171837] font-bold text-lg" }, "Scene 1"),
                                react_1["default"].createElement("div", { className: "flex items-center gap-x-3" },
                                    react_1["default"].createElement(EditAdsIcon_1["default"], { className: 'cursor-pointer' }),
                                    react_1["default"].createElement(SnapAdsIcon_1["default"], { className: 'cursor-pointer' }),
                                    react_1["default"].createElement(DeleteAdsIcon_1["default"], { className: 'cursor-pointer' })))),
                        react_1["default"].createElement("div", { className: "" },
                            react_1["default"].createElement("h1", { className: "text-[#171837] font-bold text-lg block" }, "Text Setup"),
                            react_1["default"].createElement("div", { className: "flex" },
                                react_1["default"].createElement("div", { className: 'flex my-2 flex-1' },
                                    react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'text', name: 'ddd', className: " p-2 border border-1 border-[#CFD1D5] w-fuil flex-1" }))),
                            react_1["default"].createElement("div", { className: "flex items-center" },
                                react_1["default"].createElement("div", { className: "contactUs-form-lable" },
                                    react_1["default"].createElement("label", { htmlFor: "", className: "text-xs text-[#516CF5]" },
                                        ("ROLE"),
                                        react_1["default"].createElement("p", { className: "text-[#EB0000] inline" }, "*")),
                                    react_1["default"].createElement("select", { 
                                        // style={selectSTyle}
                                        name: "", id: "", className: "text-[#949AB1] border-[#949AB1] outline-none border-2 rounded p-2 mb-3 w-full", onChange: function (e) {
                                            var _a;
                                            var select = e.target;
                                            setRoles((_a = select.options.item(select.selectedIndex)) === null || _a === void 0 ? void 0 : _a.innerText);
                                        } },
                                        react_1["default"].createElement("option", { value: "super-admin" }, ("Super Admin")),
                                        react_1["default"].createElement("option", { value: "normal" }, ("Normal Admin")),
                                        react_1["default"].createElement("option", { value: "Manager" }, ("Regular Admin")),
                                        react_1["default"].createElement("option", { value: "account" }, ("Bad Admin")),
                                        react_1["default"].createElement("option", { value: "other" }, ("Other")))),
                                react_1["default"].createElement("div", { className: "contactUs-form-lable" },
                                    react_1["default"].createElement("label", { htmlFor: "", className: "text-xs text-[#516CF5]" },
                                        ("ROLE"),
                                        react_1["default"].createElement("p", { className: "text-[#EB0000] inline" }, "*")),
                                    react_1["default"].createElement("select", { 
                                        // style={selectSTyle}
                                        name: "", id: "", className: "text-[#949AB1] border-[#949AB1] outline-none border-2 rounded p-2 mb-3 w-full", onChange: function (e) {
                                            var _a;
                                            var select = e.target;
                                            setRoles((_a = select.options.item(select.selectedIndex)) === null || _a === void 0 ? void 0 : _a.innerText);
                                        } },
                                        react_1["default"].createElement("option", { value: "super-admin" }, ("Super Admin")),
                                        react_1["default"].createElement("option", { value: "normal" }, ("Normal Admin")),
                                        react_1["default"].createElement("option", { value: "Manager" }, ("Regular Admin")),
                                        react_1["default"].createElement("option", { value: "account" }, ("Bad Admin")),
                                        react_1["default"].createElement("option", { value: "other" }, ("Other")))))),
                        react_1["default"].createElement("div", { className: "flex items-center justify-between border flex-1 lg:mt-auto mt-10" },
                            react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2" },
                                react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[28px]' }, "A+"),
                                react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Add Text")),
                            react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2" },
                                react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[28px]' }, "30"),
                                react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Edit Scene")),
                            react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2" },
                                react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[28px]' }, "Rec"),
                                react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Background")))))),
                tabIndex !== "Scene" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "" }))))),
        react_1["default"].createElement("div", { className: "flex  items-center justify-between bg-[#FCFCFF] border-[#F1F3FF] border p-5  w-[100%]" },
            react_1["default"].createElement("div", { className: "gap-x-3 flex" },
                react_1["default"].createElement(Button_1["default"], { className: "bg-[#949AB1]" }, "Undo Changes"),
                react_1["default"].createElement(Button_1["default"], { className: "bg-[#FF5660]" }, "Delete Advert")),
            react_1["default"].createElement("div", { className: "gap-x-3 flex" },
                react_1["default"].createElement(Button_1["default"], { className: 'bg-[#868BA1] ', onClick: function () { return navigate(-1); } }, "Cancel"),
                react_1["default"].createElement(Button_1["default"], { className: 'bg-[#19C165]' }, "Save Changes")))));
};
exports["default"] = CreateAderts;
