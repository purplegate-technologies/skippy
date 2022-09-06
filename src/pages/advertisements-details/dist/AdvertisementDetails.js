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
// import DoughnutChart from '../../components/charts/DoughnutChart'
var video_1 = require("./video");
var react_circular_progressbar_1 = require("react-circular-progressbar");
var AdvertsApiSlice_1 = require("../../features/adverts/AdvertsApiSlice");
var videos = [
    {
        description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/BigBuckBunny.jpg",
        title: "Big Buck Bunny"
    },
    {
        description: "The first Blender Open Movie from 2006",
        sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        subtitle: "By Blender Foundation",
        thumb: "images/ElephantsDream.jpg",
        title: "Elephant Dream"
    },
    {
        description: "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
        sources: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        subtitle: "By Google",
        thumb: "images/ForBiggerBlazes.jpg",
        title: "For Bigger Blazes"
    }
];
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
    // const [current, setCurrent] = React.useState(0);
    var _a, _b, _c, _d;
    var id = react_router_dom_1.useParams().id;
    var _e = react_1.useState("Info"), tabIndex = _e[0], setTabIndex = _e[1];
    var navigate = react_router_dom_1.useNavigate();
    var _f = AdvertsApiSlice_1.useGetAdvertByIdQuery(id, { refetchOnMountOrArgChange: true }), data = _f.data, isFetching = _f.isFetching, isLoading = _f.isLoading;
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
        // width: 720,
        // height: 100,
        fluid: true,
        controls: true,
        sources: [
            {
                src: data ? data === null || data === void 0 ? void 0 : data.videoUrl : "",
                type: 'video/mp4'
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
                            react_1["default"].createElement("span", null,
                                data ? data === null || data === void 0 ? void 0 : data.external : "-",
                                " Advert"),
                            " | ",
                            react_1["default"].createElement("span", { className: 'capitalize text-[#00D48A]' }, data ? data === null || data === void 0 ? void 0 : data.status : "-")),
                        react_1["default"].createElement("span", { className: 'font-bold text-[#171837]' }, data ? data === null || data === void 0 ? void 0 : data.title : "-"),
                        react_1["default"].createElement("p", { className: 'text-sm my-1' },
                            "Created: ",
                            data ? data === null || data === void 0 ? void 0 : data.createdAt : "-"))),
                react_1["default"].createElement("div", { className: "flex items-center justify-between md:gap-x-3 lg:mt-auto mt-10 md:mt-0  md:ml-auto" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/edit-advert/" + id, onClick: function () { }, className: "flex flex-col cursor-pointer items-center p-1" },
                        react_1["default"].createElement(EditIcon_1["default"], null),
                        react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Edit")),
                    react_1["default"].createElement("div", { onClick: function () { }, className: "flex flex-col cursor-pointer items-center p-1" },
                        react_1["default"].createElement(Deactivite_1["default"], null),
                        react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Deactivite")),
                    react_1["default"].createElement("div", { onClick: function () { }, className: "flex flex-col cursor-pointer items-center p-1" },
                        react_1["default"].createElement(ExportIcon_1["default"], null),
                        react_1["default"].createElement("span", { className: 'text-[#949AB1] text-xs' }, "Export"))))),
        react_1["default"].createElement("div", { className: "grid lg:grid-cols-2  gap-10" },
            react_1["default"].createElement("div", { className: "flex-1 flex flex-col bg-white" }, isLoading ? "isFetching Videos" : (react_1["default"].createElement(react_1["default"].Fragment, null, isFetching ? "isFetching Videos" : (react_1["default"].createElement(video_1["default"], { options: videoJsOptions, onReady: handlePlayerReady }))))),
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
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Category"),
                                react_1["default"].createElement("p", { className: "text-[#516CF5] text-sm text-right capitalize" }, data ? (data === null || data === void 0 ? void 0 : data.type) + " Advert" : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Brand Name/Ad Title"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.title : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Action Link"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.videoUrl : "")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Duration"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.lengthInSeconds : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Point per Play"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.points : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Created By"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" },
                                    data ? (_a = data === null || data === void 0 ? void 0 : data.createdBy) === null || _a === void 0 ? void 0 : _a.firstName : "-",
                                    " ",
                                    data ? (_b = data === null || data === void 0 ? void 0 : data.createdBy) === null || _b === void 0 ? void 0 : _b.lastName : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Add Date"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.updatedAt : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Last Modified"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" }, data ? data === null || data === void 0 ? void 0 : data.updatedAt : "-")),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-6" },
                                react_1["default"].createElement("p", { className: "text-[#949AB1] text-sm" }, "Modified By"),
                                react_1["default"].createElement("p", { className: "text-[#171837] text-sm text-right" },
                                    data ? (_c = data === null || data === void 0 ? void 0 : data.createdBy) === null || _c === void 0 ? void 0 : _c.firstName : "-",
                                    " ",
                                    data ? (_d = data === null || data === void 0 ? void 0 : data.createdBy) === null || _d === void 0 ? void 0 : _d.lastName : "-")))))),
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
