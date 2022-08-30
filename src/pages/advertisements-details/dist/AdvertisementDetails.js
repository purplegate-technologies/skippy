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
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Deactivite_1 = require("../../assets/svg/Deactivite");
var EditIcon_1 = require("../../assets/svg/EditIcon");
var ExportIcon_1 = require("../../assets/svg/ExportIcon");
var Breadcrubs_1 = require("../../components/breadcrubs/Breadcrubs");
var video_1 = require("./video");
var react_circular_progressbar_1 = require("react-circular-progressbar");
var bread = [
    {
        name: 'Dashboard',
        url: ''
    },
    {
        name: 'Advertisements',
        url: "advertisements"
    },
    {
        name: 'Advertisements Details',
        url: "advertisements-details"
    }
];
var AdvertisementDetails = function () {
    var _a = react_1.useState("Info"), tabIndex = _a[0], setTabIndex = _a[1];
    var navigate = react_router_dom_1.useNavigate();
    var playerRef = react_1["default"].useRef(null);
    var handlePlayerReady = function (player) {
        playerRef.current = player;
        // You can handle player events here, for example:
        player.on('waiting', function () {
            // videojs.log('player is waiting');
        });
        player.on('dispose', function () {
            // videojs.log('player will dispose');
        });
    };
    var videoJsOptions = {
        autoplay: false,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        width: 720,
        height: 600,
        controls: true,
        sources: [
            {
                src: '//vjs.zencdn.net/v/oceans.mp4',
                type: 'video/mp4'
            },
            {
                src: "https://www.youtube.com/watch?v=K9GymlBfrXg",
                type: "video/mp4"
            },
        ]
    };
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("div", { className: "flex items-center justify-between" },
            react_1["default"].createElement(Breadcrubs_1["default"], __assign({}, { bread: bread })),
            react_1["default"].createElement(react_router_dom_1.Link, { to: "", onClick: function () { return navigate(-1); }, className: "flex text-[#516CF5]" },
                react_1["default"].createElement("span", null, "<"),
                " < ",
                react_1["default"].createElement("span", null, " Back"))),
        react_1["default"].createElement("div", { className: "adverts-details my-5 border rounded-xl shadow-sm p-4" },
            react_1["default"].createElement("div", { className: "grid lg:grid-flow-col" },
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement("img", { src: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp", alt: "Avatar", className: "rounded-full w-14 shadow-lg" }),
                    react_1["default"].createElement("div", { className: 'ml-3 text-[#949AB1]' },
                        react_1["default"].createElement("p", { className: 'text-sm my-1' },
                            react_1["default"].createElement("span", null, "Internal Advert"),
                            " | ",
                            react_1["default"].createElement("span", { className: 'text-[#00D48A]' }, "Active")),
                        react_1["default"].createElement("span", { className: 'font-bold text-[#171837]' }, "Netflix Price Slash Promo"),
                        react_1["default"].createElement("p", { className: 'text-sm my-1' }, "Created: 15/05/2021"))),
                react_1["default"].createElement("div", { className: "flex items-center place-items-cente md:plrace-self-end gap-x-3 lg:mt-auto mt-10" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/create-adverts", onClick: function () { }, className: "flex flex-col cursor-pointer items-center p-1" },
                        react_1["default"].createElement(EditIcon_1["default"], null),
                        react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Edit")),
                    react_1["default"].createElement("div", { onClick: function () { }, className: "flex flex-col cursor-pointer items-center p-1" },
                        react_1["default"].createElement(Deactivite_1["default"], null),
                        react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Deactivite")),
                    react_1["default"].createElement("div", { onClick: function () { }, className: "flex flex-col cursor-pointer items-center p-1" },
                        react_1["default"].createElement(ExportIcon_1["default"], null),
                        react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Export"))))),
        react_1["default"].createElement("div", { className: "grid lg:grid-cols-2  gap-10" },
            react_1["default"].createElement("div", { className: "flex-1 flex flex-col bg-white" },
                react_1["default"].createElement(video_1["default"], { options: videoJsOptions, className: "video-js", onReady: handlePlayerReady })),
            react_1["default"].createElement("div", { className: "md:basis-[45%] flex flex-col bg-white mb-10" },
                react_1["default"].createElement("div", { className: "" },
                    react_1["default"].createElement("div", { className: " flex h-full borderitems-center flex-row border-[#F1F3FF] text-[#949AB1] relative" },
                        react_1["default"].createElement("p", { className: "tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Info" && "tabIndex text-[#516CF5] border-t-2 border-t-[#516CF5]"), onClick: function () { return setTabIndex("Info"); } },
                            "Info",
                            " "),
                        react_1["default"].createElement("p", { className: "tabIndex text-center p-3 w-24 hover:border-t-2 hover:border-[#516CF5] cursor-pointer hover:text-[#516CF5]" + (tabIndex === "Statistics" && " text-[#516CF5] border-t-2 border-t-[#516CF5]"), onClick: function () { return setTabIndex("Statistics"); } }, "Statistics"))),
                tabIndex === "Info" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h1", { className: "border-b p-6 font-bold text-[#171837] text-base" }, "Advert Info"),
                        react_1["default"].createElement("div", { className: "flex flex-col px-4 mt-7" },
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Category"),
                                react_1["default"].createElement("p", { className: "text-[#516CF5] text-xs text-right" }, "Netflix Price Slash Promo")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Brand Name/Ad Title"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "Netflix Price Slash Promo")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Action Link"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "https://netflix.com/")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Duration"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "01:30 mins")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Point per Play"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "100")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Created By"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "Imani Johnson")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Add Date"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "01/05/2021")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Last Modified"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "01/05/2021")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-xs" }, "Modified By"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-xs text-right" }, "Imani Johnson")))))),
                tabIndex !== "Info" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "" },
                        react_1["default"].createElement("h1", { className: "m-6 font-bold text-[#171837] text-base" }, "Advert Report"),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("div", { className: "flex items-center justify-between flex-1 lg:mt-auto mt-10" },
                                react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full m-2 p-5 rounded-xl" },
                                    react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[18px]' }, "98,000"),
                                    react_1["default"].createElement("span", { className: 'text-[#171837] text-[10px]' }, "Created Adverts"),
                                    react_1["default"].createElement("div", { className: "flex items-center justify-center mt-2 text-[10px] gap-1" },
                                        react_1["default"].createElement("p", { className: "text-[#19C165] bg-[#E8F9F0] p-1 rounded" }, "12% \u2191"),
                                        react_1["default"].createElement("p", { className: "text-[#171837]" }, "from 75k"))),
                                react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full m-2 p-5 rounded-xl" },
                                    react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[18px]' }, "98,000"),
                                    react_1["default"].createElement("span", { className: 'text-[#171837] text-[10px]' }, "Created Adverts"),
                                    react_1["default"].createElement("div", { className: "flex items-center justify-center mt-2 text-[10px] gap-1" },
                                        react_1["default"].createElement("p", { className: "text-[#19C165] bg-[#E8F9F0] p-1 rounded" }, "12% \u2191"),
                                        react_1["default"].createElement("p", { className: "text-[#171837]" }, "from 75k"))),
                                react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full m-2 p-5 rounded-xl" },
                                    react_1["default"].createElement("p", { className: 'text-[#516CF5] text-[18px]' }, "98,000"),
                                    react_1["default"].createElement("span", { className: 'text-[#171837] text-[10px]' }, "Created Adverts"),
                                    react_1["default"].createElement("div", { className: "flex items-center justify-center mt-2 text-[10px] gap-1" },
                                        react_1["default"].createElement("p", { className: "text-[#19C165] bg-[#E8F9F0] p-1 rounded" }, "12% \u2191"),
                                        react_1["default"].createElement("p", { className: "text-[#171837]" }, "from 75k")))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: "flex items-center justify-between flex-1 lg:mt-auto mt-10" },
                                    react_1["default"].createElement("div", { className: "flex flex-col items-center border w-full m-2 p-5 rounded-xl" },
                                        react_1["default"].createElement("p", { className: 'text-[#171837] text-[18px]' }, "Overall Payout"),
                                        react_1["default"].createElement("div", { className: 'text-center my-4' },
                                            react_1["default"].createElement("span", { className: 'text-[#949AB1] text-[10px]' }, "Skippy Points Volume"),
                                            react_1["default"].createElement("p", { className: 'text-[#171837] text-[18px]' }, "98,000")),
                                        react_1["default"].createElement("div", { className: 'text-center my-4' },
                                            react_1["default"].createElement("span", { className: 'text-[#949AB1] text-[10px]' }, "Value (N)"),
                                            react_1["default"].createElement("p", { className: 'text-[#171837] text-[18px]' }, "N45,000")),
                                        react_1["default"].createElement("div", { className: "flex items-center justify-center mt-2 text-[10px] gap-1" },
                                            react_1["default"].createElement("p", { className: "text-[#19C165] bg-[#E8F9F0] p-1 rounded" }, "12% \u2191"),
                                            react_1["default"].createElement("p", { className: "text-[#171837]" }, "from 80,000"))),
                                    react_1["default"].createElement("div", { className: "flex flex-col items-center justify-between border w-full m-2 p-5 rounded-xl" },
                                        react_1["default"].createElement("p", { className: 'text-[#171837] text-[18px]' }, "BOUNCE RATE"),
                                        react_1["default"].createElement("div", { className: " mx-auto my-3" },
                                            react_1["default"].createElement(react_circular_progressbar_1.CircularProgressbar, { value: 100, text: "70%", strokeWidth: 10, className: "w-[150px] h-[150px] justify-self-center flex-1", styles: {
                                                    path: {
                                                        transform: "rotate(180deg)",
                                                        transformOrigin: "center center",
                                                        strokeLinecap: "butt",
                                                        stroke: "#FF5660"
                                                    },
                                                    trail: {
                                                    // strokeWidth: 0
                                                    },
                                                    text: {
                                                        fontSize: 22,
                                                        fontWeight: 800,
                                                        animation: "fadein 2s",
                                                        fill: "#347BF4"
                                                    }
                                                } })),
                                        react_1["default"].createElement("div", { className: "flex items-center justify-center mt-2 text-[10px] gap-1" },
                                            react_1["default"].createElement("p", { className: "text-[#FF5660] bg-[#FFEDEE] p-1 rounded" }, "12% \u2191"),
                                            react_1["default"].createElement("p", { className: "text-[#171837]" }, "from 75k")))))))))))));
};
exports["default"] = AdvertisementDetails;
