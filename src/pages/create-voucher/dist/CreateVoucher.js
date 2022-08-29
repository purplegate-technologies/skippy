"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var CompanyLogo_1 = require("../../assets/svg/CompanyLogo");
var Button_1 = require("../../components/button/Button");
var Input_1 = require("../../components/input/Input");
var TopNav_1 = require("../../components/topnav/TopNav");
var CreateVoucher = function () {
    var navigate = react_router_dom_1.useNavigate();
    return (React.createElement("section", null,
        React.createElement("div", { className: 'flex' },
            React.createElement("div", { className: "sidebar__logo" },
                React.createElement(react_router_dom_1.Link, { to: "/" },
                    React.createElement(CompanyLogo_1["default"], null)),
                React.createElement(react_router_dom_1.Link, { to: "/", style: { textDecoration: 'none', color: 'black', marginLeft: '8px' } }, "Admin@skippy.com"),
                React.createElement("div", { className: 'h-10' })),
            React.createElement("div", { className: "flex-1" },
                React.createElement(TopNav_1["default"], null))),
        React.createElement("div", { className: "grid md:grid-cols-12 gap-10 m-5" },
            React.createElement("div", { className: 'md:col-span-7 flex flex-col bg-white' },
                React.createElement("div", { className: "p-2 items-center flex justify-between" },
                    " ",
                    React.createElement("span", null, "Voucher  Details "),
                    " ",
                    React.createElement("span", { className: "text-[#949AB1]" }, "e.g. 30% off / Buy 1 get 1 free")),
                React.createElement(Input_1["default"], { type: 'text', placeholder: 'N1500.00 Voucher' }),
                React.createElement("div", { className: "flex items-center gap-x-5 justify-between" },
                    React.createElement(Input_1["default"], { type: 'date', className: 'flex-1 w-full flex border border-[black] p-2', label: 'Start Date', labelStyle: 'text-sm' }),
                    React.createElement(Input_1["default"], { type: 'date', className: 'flex-1 w-full flex border border-[black] p-2', label: 'Expiry Date', labelStyle: 'text-sm' }))),
            React.createElement("div", { className: 'md:col-span-5 flex flex-col bg-white' }, "create Voucher")),
        React.createElement("div", { className: "flex  items-center justify-between bg-[#FCFCFF] border-[#F1F3FF] border p-5 fixed bottom-0 w-[100%]" },
            React.createElement("div", { className: "gap-x-3 flex" },
                React.createElement(Button_1["default"], { className: "bg-[#949AB1]" }, "Undo Changes"),
                React.createElement(Button_1["default"], { className: "bg-[#FF5660]" }, "Delete Advert")),
            React.createElement("div", { className: "gap-x-3 flex" },
                React.createElement(Button_1["default"], { className: 'bg-[#868BA1]', onClick: function () { return navigate(-1); } }, "Cancel"),
                React.createElement(Button_1["default"], { className: 'bg-[#19C165]' }, "Save Changes")))));
};
exports["default"] = CreateVoucher;
