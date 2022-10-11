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
require("./advertisements.css");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Table_1 = require("../../components/Table/Table");
var data_1 = require("../../assets/data/data");
var ThreeVdots_1 = require("../../assets/svg/ThreeVdots");
var SearchBar_1 = require("../../components/support/SearchBar");
var statsApis_1 = require("../../features/stats/statsApis");
var AdvertsApiSlice_1 = require("../../features/adverts/AdvertsApiSlice");
var CategoryFilter_1 = require("../../components/CategoryFilter/CategoryFilter");
var LinearGradientChart_1 = require("../../components/charts/LinearGradientChart");
var StatusCardIcon_1 = require("../../assets/svg/StatusCardIcon");
var CreateAdsPlus_1 = require("../../assets/svg/CreateAdsPlus");
var Advertisements = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    var _0 = react_1.useState(""), iconState = _0[0], setIconState = _0[1];
    var userData = react_1.useState({
        labels: data_1.UserData.map(function (data) { return data.day.toUpperCase(); }),
        datasets: [
            {
                label: "Ads Watched",
                data: data_1.UserData.map(function (data) { return data.adsWatched; }),
                backgroundColor: "#2a71d0",
                borderColor: "#2a71d0",
                borderWidth: 2
            },
        ]
    })[0];
    var _1 = react_1.useState(userData), externalGraph = _1[0], setExternalGraph = _1[1];
    var _2 = react_1.useState(userData), internalGraph = _2[0], setInternalGraph = _2[1];
    var data = statsApis_1.useGetAdvertStatsQuery().data;
    var _3 = AdvertsApiSlice_1.useGetAdvertAdminQuery({}), getAds = _3.data, isLoading = _3.isLoading, isFetching = _3.isFetching;
    console.log(data, "useGetAdvertStatsQuery");
    console.log(getAds === null || getAds === void 0 ? void 0 : getAds.docs, "gerAds");
    var navigate = react_router_dom_1.useNavigate();
    // InternalGraph
    react_1.useEffect(function () {
        var _a;
        // weekly stats
        if (data && (data === null || data === void 0 ? void 0 : data.graphStats)) {
            var internalAdsStats_1 = [];
            var internalAdsStatsValue_1 = [];
            Object.entries((_a = data === null || data === void 0 ? void 0 : data.graphStats) === null || _a === void 0 ? void 0 : _a.internalAdsStats).map(function (val) {
                internalAdsStats_1.push(val[0]);
                //@ts-ignore
                internalAdsStatsValue_1.push(val[1]);
            });
            setInternalGraph({
                labels: internalAdsStats_1.map(function (data) { return data.toUpperCase(); }),
                datasets: [
                    {
                        label: "Ads Watched",
                        data: internalAdsStatsValue_1.map(function (data) { return data; }),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1
                    },
                ]
            });
        }
    }, [data]);
    //  ExternalGraph
    react_1.useEffect(function () {
        var _a;
        // weekly stats
        if (data && (data === null || data === void 0 ? void 0 : data.graphStats)) {
            var externalAdsStats_1 = [];
            var externalAdsStatsValue_1 = [];
            Object.entries((_a = data === null || data === void 0 ? void 0 : data.graphStats) === null || _a === void 0 ? void 0 : _a.externalAdsStats).map(function (val) {
                externalAdsStats_1.push(val[0]);
                //@ts-ignore
                externalAdsStatsValue_1.push(val[1]);
            });
            setExternalGraph({
                labels: externalAdsStats_1.map(function (data) { return data.toUpperCase(); }),
                datasets: [
                    {
                        label: "Ads Watched",
                        data: externalAdsStatsValue_1.map(function (data) { return data; }),
                        backgroundColor: "#2a71d0",
                        borderColor: "#2a71d0",
                        borderWidth: 1
                    },
                ]
            });
        }
    }, [data]);
    var customerTableHead = [
        'Brand Name/ Ad Title',
        'Streams',
        'Category',
        'Cost',
        'Duration',
        'Date Posted',
        'Posted By',
        'Status',
        'Action',
    ];
    var renderHead = function (item, index) { return React.createElement("th", { key: index }, item); };
    var renderBody = function (item, index) { return (React.createElement("tr", { key: item === null || item === void 0 ? void 0 : item._id },
        React.createElement("td", null, item === null || item === void 0 ? void 0 : item.title),
        React.createElement("td", null, item === null || item === void 0 ? void 0 : item.streamCount),
        React.createElement("td", null, item === null || item === void 0 ? void 0 : item.type),
        React.createElement("td", null, item === null || item === void 0 ? void 0 : item.points),
        React.createElement("td", null, item === null || item === void 0 ? void 0 : item.lengthInSeconds),
        React.createElement("td", { className: "whitespace-nowrap" }, item === null || item === void 0 ? void 0 : item.createdAt),
        React.createElement("td", { className: "whitespace-nowrap" }, item === null || item === void 0 ? void 0 : item.updatedAt),
        React.createElement("td", null, item === null || item === void 0 ? void 0 : item.status),
        React.createElement("td", null,
            React.createElement(react_router_dom_1.Link, { to: "/advertisements/" + (item === null || item === void 0 ? void 0 : item._id), className: "underline text-[#516CF5] whitespace-nowrap" }, "View Details")))); };
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("h4", { className: 'cardHead font-semibold' }, "Overview"),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-3" },
                    React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        React.createElement("div", { className: "status-card__info" },
                            React.createElement("span", null, (_a = ("Overall Internal ads")) === null || _a === void 0 ? void 0 : _a.toString().toUpperCase()),
                            React.createElement("h4", null, data ? (_b = data === null || data === void 0 ? void 0 : data.endDate) === null || _b === void 0 ? void 0 : _b.totalInternalAdverts : "-"),
                            React.createElement("div", { className: "status-card__info__percent" },
                                React.createElement("span", { className: 'percentUp' }, data ? ((((_c = data === null || data === void 0 ? void 0 : data.endDate) === null || _c === void 0 ? void 0 : _c.totalInternalAdverts) - ((_d = data === null || data === void 0 ? void 0 : data.startDate) === null || _d === void 0 ? void 0 : _d.totalInternalAdverts)) / ((_e = data === null || data === void 0 ? void 0 : data.endDate) === null || _e === void 0 ? void 0 : _e.totalInternalAdverts) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                React.createElement("span", null, data ? "from " + ((_f = data === null || data === void 0 ? void 0 : data.startDate) === null || _f === void 0 ? void 0 : _f.totalInternalAdverts) : "from -"))),
                        React.createElement("div", { className: "status-card__icon" },
                            React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                React.createElement("div", { className: "col-3" },
                    React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        React.createElement("div", { className: "status-card__info" },
                            React.createElement("span", null, (_g = ("Overall External Ads")) === null || _g === void 0 ? void 0 : _g.toString().toUpperCase()),
                            React.createElement("h4", null, data ? (_h = data === null || data === void 0 ? void 0 : data.endDate) === null || _h === void 0 ? void 0 : _h.totalExternalAdverts : "-"),
                            React.createElement("div", { className: "status-card__info__percent" },
                                React.createElement("span", { className: 'percentUp' }, data ? ((((_j = data === null || data === void 0 ? void 0 : data.endDate) === null || _j === void 0 ? void 0 : _j.totalExternalAdverts) - ((_k = data === null || data === void 0 ? void 0 : data.startDate) === null || _k === void 0 ? void 0 : _k.totalExternalAdverts)) / ((_l = data === null || data === void 0 ? void 0 : data.endDate) === null || _l === void 0 ? void 0 : _l.totalExternalAdverts) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                React.createElement("span", null, data ? "from " + ((_m = data === null || data === void 0 ? void 0 : data.startDate) === null || _m === void 0 ? void 0 : _m.totalExternalAdverts) : "from -"))),
                        React.createElement("div", { className: "status-card__icon" },
                            React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                React.createElement("div", { className: "col-3" },
                    React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        React.createElement("div", { className: "status-card__info" },
                            React.createElement("span", null, (_o = ("completed Sessions")) === null || _o === void 0 ? void 0 : _o.toString().toUpperCase()),
                            React.createElement("h4", null, data ? (_p = data === null || data === void 0 ? void 0 : data.endDate) === null || _p === void 0 ? void 0 : _p.totalStreams : "-"),
                            React.createElement("div", { className: "status-card__info__percent" },
                                React.createElement("span", { className: 'percentUp' }, data ? ((((_q = data === null || data === void 0 ? void 0 : data.endDate) === null || _q === void 0 ? void 0 : _q.totalStreams) - ((_r = data === null || data === void 0 ? void 0 : data.startDate) === null || _r === void 0 ? void 0 : _r.totalStreams)) / ((_s = data === null || data === void 0 ? void 0 : data.endDate) === null || _s === void 0 ? void 0 : _s.totalStreams) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                React.createElement("span", null, data ? "from " + ((_t = data === null || data === void 0 ? void 0 : data.startDate) === null || _t === void 0 ? void 0 : _t.totalStreams) : "from -"))),
                        React.createElement("div", { className: "status-card__icon" },
                            React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                React.createElement("div", { className: "col-3" },
                    React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                        React.createElement("div", { className: "status-card__info" },
                            React.createElement("span", null, (_u = ("Avg. INTERACTION Rate")) === null || _u === void 0 ? void 0 : _u.toString().toUpperCase()),
                            React.createElement("h4", null, data ? (_v = data === null || data === void 0 ? void 0 : data.endDate) === null || _v === void 0 ? void 0 : _v.totalCompletedStreams : "-"),
                            React.createElement("div", { className: "status-card__info__percent" },
                                React.createElement("span", { className: 'percentUp' }, data ? ((((_w = data === null || data === void 0 ? void 0 : data.endDate) === null || _w === void 0 ? void 0 : _w.totalCompletedStreams) - ((_x = data === null || data === void 0 ? void 0 : data.startDate) === null || _x === void 0 ? void 0 : _x.totalCompletedStreams)) / ((_y = data === null || data === void 0 ? void 0 : data.endDate) === null || _y === void 0 ? void 0 : _y.totalCompletedStreams) * 100).toFixed(1) + "% \u2191 " : "-% ↑"),
                                " ",
                                React.createElement("span", null, data ? "from " + ((_z = data === null || data === void 0 ? void 0 : data.startDate) === null || _z === void 0 ? void 0 : _z.totalCompletedStreams) : "from -"))),
                        React.createElement("div", { className: "status-card__icon" },
                            React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))))),
        React.createElement("div", { className: 'row items-center my-10 gap-x-3' },
            React.createElement("div", { className: 'col-6 card' },
                React.createElement("div", { className: 'basis-1/2' },
                    React.createElement("div", { className: "flex items-center justify-between" },
                        React.createElement("h6", { className: 'text-[#171837] text-sm' }, "Internal Ads Watch Trend"),
                        React.createElement(ThreeVdots_1["default"], null)),
                    React.createElement(LinearGradientChart_1["default"], { chartData: internalGraph }))),
            React.createElement("div", { className: 'col-6 card' },
                React.createElement("div", { className: 'basis-1/2' },
                    React.createElement("div", { className: "flex items-center justify-between" },
                        React.createElement("h6", { className: 'text-[#171837] text-sm' }, "External Ads Watch Trend"),
                        React.createElement(ThreeVdots_1["default"], null)),
                    React.createElement(LinearGradientChart_1["default"], { chartData: externalGraph })))),
        React.createElement("div", { className: 'my-5' }),
        React.createElement("div", { className: "card" },
            React.createElement(SearchBar_1["default"], { HeaderTitle: 'All Adverts', placeholder: 'Enter Brand/Ad Name', text: 'Create Advert', onClick: function () { return navigate('/create-adverts'); }, prefixIcon: React.createElement(CreateAdsPlus_1["default"], null) }),
            React.createElement(CategoryFilter_1["default"], null),
            React.createElement("div", { className: "row " },
                React.createElement("div", { className: "col-12" },
                    React.createElement("div", { className: "" },
                        React.createElement("div", { className: "card__body" },
                            React.createElement(Table_1["default"], __assign({ limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: isLoading ? [] : getAds === null || getAds === void 0 ? void 0 : getAds.docs, renderBody: function (item, index) { return renderBody(item, index); } }, { isLoading: isLoading }, { isFetching: isFetching })))))))));
};
exports["default"] = Advertisements;
