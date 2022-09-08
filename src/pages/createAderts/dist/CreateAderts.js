"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var CompanyLogo_1 = require("../../assets/svg/CompanyLogo");
var Button_1 = require("../../components/button/Button");
var Input_1 = require("../../components/input/Input");
var TopNav_1 = require("../../components/topnav/TopNav");
var DeleteAdsIcon_1 = require("./DeleteAdsIcon");
var EditAdsIcon_1 = require("./EditAdsIcon");
var SnapAdsIcon_1 = require("./SnapAdsIcon");
var VideoSlider_1 = require("./VideoSlider");
var react_select_1 = require("react-select");
var AdvertsApiSlice_1 = require("../../features/adverts/AdvertsApiSlice");
var Select_1 = require("../../components/Select/Select");
var react_toastify_1 = require("react-toastify");
var options = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'InActive' },
    { value: 'draft', label: 'draft' },
];
var CreateAderts = function () {
    var id = react_router_dom_1.useParams().id;
    console.log(id, "so hlep me God");
    var initailState = {
        title: "",
        type: '',
        status: "",
        points: "",
        file: ""
    };
    var _a = react_1.useState(initailState), formValues = _a[0], setFormValue = _a[1];
    var _b = react_1.useState(null), selectedOption = _b[0], setSelectedOption = _b[1];
    var title = formValues.title, type = formValues.type, status = formValues.status, points = formValues.points, file = formValues.file;
    var handleChangeSeelect = function (val) {
        setSelectedOption(val);
    };
    // const onFinish = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    var setField = function (field, value) {
        var _a;
        setFormValue(__assign(__assign({}, formValues), (_a = {}, _a[field] = value, _a)));
    };
    var _c = react_1.useState("Scene"), tabIndex = _c[0], setTabIndex = _c[1];
    var _d = react_1.useState("Add"), tabIndexText = _d[0], setTabIndexText = _d[1];
    // const [roles, setRoles] = useState("Finances and billing")
    // create Adverts
    var _e = AdvertsApiSlice_1.useCreateAdvertMutation(), createAdvert = _e[0], isSuccess = _e[1].isSuccess;
    var deleteAdvert = AdvertsApiSlice_1.useDeleteAdvertMutation()[0];
    // const { data } = useGetStreamAdminQuery({})
    // console.log(data, 'data useGetStreamAdminQuery')
    var handleDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteAdvert(id)];
                case 1:
                    _a.sent();
                    react_toastify_1.toast.success("Advert Deleted Successfully");
                    navigate('/advertisements');
                    return [2 /*return*/];
            }
        });
    }); };
    var handleUploadCover = function (e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append("files", e.target.files[0]);
        console.log(e.target.files[0]);
        setField("file", e.target.files[0].name);
    };
    var onFinish = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    if (!(title && type && status && points && file)) return [3 /*break*/, 3];
                    return [4 /*yield*/, createAdvert(formValues).unwrap()];
                case 2:
                    _a.sent();
                    setFormValue({
                        title: "",
                        type: '',
                        status: "",
                        points: "",
                        file: ""
                    });
                    react_toastify_1.toast.success("successfully Created an Advert");
                    navigate('/advertisements');
                    return [3 /*break*/, 4];
                case 3:
                    react_toastify_1.toast.error("Please fill all Input field");
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    react_toastify_1.toast.error(e_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var navigate = react_router_dom_1.useNavigate();
    return (react_1["default"].createElement("section", { className: "bg-[#FCFCFF]" },
        react_1["default"].createElement("form", { onSubmit: onFinish },
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
                    react_1["default"].createElement("div", { className: "flex items-center my-3" },
                        react_1["default"].createElement("label", { className: "flex flex-col justify-center items-center w-full h-10 bg-[#F1F3FF] border-2 border-gray-300  cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 " },
                            react_1["default"].createElement("div", { className: "flex flex-col justify-center items-start" },
                                react_1["default"].createElement("p", { className: "text-left" }, "Select an audio file")),
                            react_1["default"].createElement(Input_1["default"], { type: "file", className: "hidden w-full", required: true, onChange: handleUploadCover })),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Button_1["default"], { className: 'rounded-none bg-[#516CF5]', 
                                // onClick={handleSubmission}
                                onClick: handleUploadCover }, "Add Audio"))),
                    react_1["default"].createElement(Button_1["default"], { type: 'submit', className: "w-full border-[#516CF5] mt-10 border border-dashed bg-white text-[#516CF5]" }, "\u00A0\u00A0Add\u00A0a\u00A0Scene")),
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
                                react_1["default"].createElement("select", { className: "bg-[#EAEDFE] text-[#516CF5] rounded-full p-1 px-2 text-sm outline-none", value: type, onChange: function (e) {
                                        var select = e.target;
                                        setField("type", select.value);
                                    } },
                                    react_1["default"].createElement("option", { value: "internal" }, "Internal"),
                                    react_1["default"].createElement("option", { value: "external" }, "External"))),
                            react_1["default"].createElement("div", { className: "flex items-center gap-x-5 mb-2" },
                                react_1["default"].createElement("div", { className: "h-20 w-20 bg-blue-400" }),
                                react_1["default"].createElement("div", { className: "flex flex-1 w-full" },
                                    react_1["default"].createElement("div", { className: "w-full" },
                                        react_1["default"].createElement("label", { className: 'my-1 text-[#171837]' }, "Brand name/Ad Title "),
                                        react_1["default"].createElement("input", { type: 'text', name: '', value: title, onChange: function (e) { return setField("title", e.target.value); }, className: 'flex flex-1 w-full p-2 border border-[#949AB1] rounded' })))),
                            react_1["default"].createElement("div", { className: "flex items-center gap-x-5 my-5" },
                                react_1["default"].createElement("img", { src: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp", className: "h-20 w-20", alt: "" }),
                                react_1["default"].createElement("div", { className: "flex flex-col gap-y-2" },
                                    react_1["default"].createElement("h1", { className: "text-[#171837] font-bold text-lg" }, "Scene 1"),
                                    react_1["default"].createElement("div", { className: "flex items-center gap-x-3" },
                                        react_1["default"].createElement(EditAdsIcon_1["default"], { className: 'cursor-pointer' }),
                                        react_1["default"].createElement(SnapAdsIcon_1["default"], { className: 'cursor-pointer' }),
                                        react_1["default"].createElement(DeleteAdsIcon_1["default"], { className: 'cursor-pointer' })))),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between flex-1 lg:mt-auto mt-10 rounded-lg" },
                                react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2  " + (tabIndexText === "Add" && "text-[#516CF5] border-2 rounded-tl-lg rounded-bl-lg border-[#516CF5]"), onClick: function () { return setTabIndexText("Add"); } },
                                    react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[28px]' }, "A+"),
                                    react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Add Text")),
                                react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2 cursor-pointer" + (tabIndexText === "Edit" && "text-[#516CF5] border-2 border-[#516CF5]"), onClick: function () { return setTabIndexText("Edit"); } },
                                    react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[28px]' }, "30"),
                                    react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Edit Scene")),
                                react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full p-2 cursor-pointer" + (tabIndexText === "Back" && "text-[#516CF5] border-2 rounded-tr-lg rounded-br-lg rouned-tr-lg border-[#516CF5]"), onClick: function () { return setTabIndexText("Back"); } },
                                    react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[28px]' }, "Rec"),
                                    react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Background"))),
                            tabIndexText === "Add" && react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement("div", { className: "" },
                                    react_1["default"].createElement("h1", { className: "text-[#171837] font-bold text-lg block" }, "Text Setup"),
                                    react_1["default"].createElement("div", { className: "flex " },
                                        react_1["default"].createElement("div", { className: 'flex my-2 flex-1' },
                                            react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'text', name: '', className: " p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" }))),
                                    react_1["default"].createElement("div", { className: "grid md:grid-cols-2 gap-10" },
                                        react_1["default"].createElement("div", { className: 'my-2 ' },
                                            react_1["default"].createElement("label", null, "points"),
                                            react_1["default"].createElement("input", { placeholder: 'Enter text here', value: points, type: 'number', maxLength: 4, onChange: function (e) { return setField("points", e.target.value); }, name: '', className: " p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" })),
                                        react_1["default"].createElement("div", { className: 'my-2' },
                                            react_1["default"].createElement("label", { htmlFor: "" }, "status"),
                                            react_1["default"].createElement(Select_1.Select
                                            // label="Your role in the chair"
                                            , { 
                                                // label="Your role in the chair"
                                                options: ["active", "inactive", 'draft'], required: true, value: status, onChange: function (value) { return setField("status", value); } }))),
                                    react_1["default"].createElement("div", { className: "flex items-center gap-x-5 my-3 w-full justify-evenly" },
                                        react_1["default"].createElement("div", { className: "contactUs-form-lable flex flex-col w-full" },
                                            react_1["default"].createElement("label", { htmlFor: "", className: "text-xs my-1 text-[#516CF5]" }, "Position"),
                                            react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, onChange: handleChangeSeelect, options: options })),
                                        react_1["default"].createElement("div", { className: "contactUs-form-lable flex flex-col w-full" },
                                            react_1["default"].createElement("label", { htmlFor: "", className: "text-xs my-1 text-[#516CF5]" }, "Text style"),
                                            react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, 
                                                // onChange={(e: any) => {
                                                //   const select = e.target as HTMLSelectElement
                                                //   setRoles(select.options.item(select.selectedIndex)?.innerText!)
                                                // }}
                                                // value={status}
                                                onChange: function (value) { return setField("status", value); }, 
                                                // onChange={handleChangeSeelect}
                                                options: options }))),
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
                                    react_1["default"].createElement("form", { className: " " },
                                        react_1["default"].createElement("div", { className: " border rounded-lg p-2 my-3" },
                                            react_1["default"].createElement("p", null, "Background HEX-Code "),
                                            react_1["default"].createElement("div", { className: 'flex items-center my-2 flex-1 gap-x-3 ' },
                                                react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'color', name: '', className: " p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" }),
                                                react_1["default"].createElement(Button_1["default"], { className: "bg-[#949AB1]" }, "Pick Color"))),
                                        react_1["default"].createElement("div", { className: " border rounded-lg p-2 my-3" },
                                            react_1["default"].createElement("p", null, "Button Background HEX-Code  "),
                                            react_1["default"].createElement("div", { className: 'flex items-center my-2 flex-1 gap-x-3 ' },
                                                react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'color', name: '', className: " p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" }),
                                                react_1["default"].createElement(Button_1["default"], { className: "bg-[#949AB1]" }, "Pick Color"))),
                                        react_1["default"].createElement("div", { className: " border rounded-lg p-2 my-3" },
                                            react_1["default"].createElement("p", null, "Button Border HEX-Code  "),
                                            react_1["default"].createElement("div", { className: 'flex items-center my-2 flex-1 gap-x-3 ' },
                                                react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'color', name: '', className: " p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" }),
                                                react_1["default"].createElement(Button_1["default"], { className: "bg-[#949AB1]" }, "Pick Color"))))))))),
                    tabIndex !== "Scene" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement("div", { className: "bg-white border p-3" },
                            react_1["default"].createElement("h1", { className: "text-[#171837] font-bold text-lg block" }, "Embed Code"),
                            react_1["default"].createElement("div", { className: "flex" },
                                react_1["default"].createElement("div", { className: 'flex my-2 flex-1 w-full' },
                                    react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'text', name: '', className: " p-2 border border-1 border-[#949AB1]  w-fuil flex flex-1" }))),
                            react_1["default"].createElement("div", { className: "flex  flex-1 items-center gap-x-3 my-3" },
                                react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, onChange: handleChangeSeelect, options: options, className: "w-full my-2" }),
                                react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, onChange: handleChangeSeelect, options: options, className: "w-full my-2" })),
                            react_1["default"].createElement("div", { className: "flex  flex-1 items-center gap-x-3 my-3" },
                                react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, onChange: handleChangeSeelect, options: options, className: "w-full my-2" }),
                                react_1["default"].createElement(react_select_1["default"], { defaultValue: selectedOption, onChange: handleChangeSeelect, options: options, className: "w-full my-2" })),
                            react_1["default"].createElement("div", { className: " border rounded-lg p-2 my-3" },
                                react_1["default"].createElement("p", null, "Button Label  Color HEX-Code   "),
                                react_1["default"].createElement("div", { className: 'flex items-center my-2 flex-1 gap-x-3 ' },
                                    react_1["default"].createElement("input", { placeholder: 'Enter text here', type: 'color', name: '', className: " p-2 border border-1 border-bg-[#949AB1]  w-fuil flex flex-1" }),
                                    react_1["default"].createElement(Button_1["default"], { className: "bg-[#949AB1]" }, "Pick Color")))))))),
            react_1["default"].createElement("div", { className: "flex  items-center justify-between bg-[#FCFCFF] border-[#F1F3FF] border p-5  w-[100%]" },
                react_1["default"].createElement("div", { className: "gap-x-3 flex" },
                    react_1["default"].createElement(Button_1["default"], { className: "bg-[#949AB1]" }, "Undo Changes"),
                    react_1["default"].createElement(Button_1["default"], { className: "bg-[#FF5660]", onClick: function () { return handleDelete(id); } }, "Delete Advert")),
                react_1["default"].createElement("div", { className: "gap-x-3 flex" },
                    react_1["default"].createElement(Button_1["default"], { className: 'bg-[#868BA1] ', onClick: function () { return navigate(-1); } }, "Cancel"),
                    react_1["default"].createElement(Button_1["default"], { className: 'bg-[#19C165]', onClick: onFinish }, "Save Changes"))))));
};
exports["default"] = CreateAderts;
