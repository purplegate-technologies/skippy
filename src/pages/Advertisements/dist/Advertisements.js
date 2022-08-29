"use strict";
exports.__esModule = true;
require("./advertisements.css");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Table_1 = require("../../components/Table/Table");
var data_1 = require("../../assets/data/data");
var ThreeVdots_1 = require("../../assets/svg/ThreeVdots");
var SearchBar_1 = require("../../components/support/SearchBar");
var advert_list_json_1 = require("../../assets/jsonData/advert-list.json");
var StatusCards_1 = require("../../components/statusCard/StatusCards");
var statsApis_1 = require("../../features/stats/statsApis");
var CategoryFilter_1 = require("../../components/CategoryFilter/CategoryFilter");
var LinearGradientChart_1 = require("../../components/charts/LinearGradientChart");
var StatusCardIcon_1 = require("../../assets/svg/StatusCardIcon");
var Advertisements = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var _l = react_1.useState(""), iconState = _l[0], setIconState = _l[1];
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
    var _m = react_1.useState(userData), externalGraph = _m[0], setExternalGraph = _m[1];
    var _o = react_1.useState(userData), internalGraph = _o[0], setInternalGraph = _o[1];
    var data = statsApis_1.useGetAdvertStatsQuery().data;
    // const { data: getAds } = useGetAdvertAdminQuery()
    // console.log(data, "useGetAdvertStatsQuery")
    // console.log(getAds, "gerAds")
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
    var renderBody = function (item, index) { return (React.createElement("tr", { key: index },
        React.createElement("td", null, item.id),
        React.createElement("td", null, item.name),
        React.createElement("td", null, item.email),
        React.createElement("td", null, item.phone),
        React.createElement("td", null, item.total_orders),
        React.createElement("td", null, item.total_spend),
        React.createElement("td", null, item.location),
        React.createElement("td", null, item.location),
        React.createElement("td", null, item.location))); };
    return (React.createElement("div", null,
        (data) ?
            React.createElement("div", null,
                !((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.endDate) === null || _b === void 0 ? void 0 : _b.totalAdverts),
                React.createElement("h4", { className: 'cardHead font-semibold' }, "Overview"),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-3" },
                        React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            React.createElement("div", { className: "status-card__info" },
                                React.createElement("span", null, (_c = ("Overall Internal ads")) === null || _c === void 0 ? void 0 : _c.toString().toUpperCase()),
                                React.createElement("h4", null, ((_d = data === null || data === void 0 ? void 0 : data.endDate) === null || _d === void 0 ? void 0 : _d.totalInternalAdverts)),
                                React.createElement("div", { className: "status-card__info__percent" },
                                    React.createElement("span", { className: 'percentUp' }, "-% ↑"),
                                    " ",
                                    React.createElement("span", null, "from -"))),
                            React.createElement("div", { className: "status-card__icon" },
                                React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                    React.createElement("div", { className: "col-3" },
                        React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            React.createElement("div", { className: "status-card__info" },
                                React.createElement("span", null, (_e = ("Overall External Ads")) === null || _e === void 0 ? void 0 : _e.toString().toUpperCase()),
                                React.createElement("h4", null, ((_f = data === null || data === void 0 ? void 0 : data.endDate) === null || _f === void 0 ? void 0 : _f.totalExternalAdverts)),
                                React.createElement("div", { className: "status-card__info__percent" },
                                    React.createElement("span", { className: 'percentUp' }, "-% ↑"),
                                    " ",
                                    React.createElement("span", null, "from -"))),
                            React.createElement("div", { className: "status-card__icon" },
                                React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                    React.createElement("div", { className: "col-3" },
                        React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            React.createElement("div", { className: "status-card__info" },
                                React.createElement("span", null, (_g = ("completed Sessions")) === null || _g === void 0 ? void 0 : _g.toString().toUpperCase()),
                                React.createElement("h4", null, ((_h = data === null || data === void 0 ? void 0 : data.endDate) === null || _h === void 0 ? void 0 : _h.totalStreams)),
                                React.createElement("div", { className: "status-card__info__percent" },
                                    React.createElement("span", { className: 'percentUp' }, "-% ↑"),
                                    " ",
                                    React.createElement("span", null, "from -"))),
                            React.createElement("div", { className: "status-card__icon" },
                                React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" })))),
                    React.createElement("div", { className: "col-3" },
                        React.createElement("div", { className: "status-card", onMouseEnter: function () { return setIconState("store"); }, onMouseLeave: function () { return setIconState(""); } },
                            React.createElement("div", { className: "status-card__info" },
                                React.createElement("span", null, (_j = ("Avg. INTERACTION Rate")) === null || _j === void 0 ? void 0 : _j.toString().toUpperCase()),
                                React.createElement("h4", null, ((_k = data === null || data === void 0 ? void 0 : data.endDate) === null || _k === void 0 ? void 0 : _k.totalCompletedStreams)),
                                React.createElement("div", { className: "status-card__info__percent" },
                                    React.createElement("span", { className: 'percentUp' }, "-% ↑"),
                                    " ",
                                    React.createElement("span", null, "from -"))),
                            React.createElement("div", { className: "status-card__icon" },
                                React.createElement(StatusCardIcon_1["default"], { hovering: iconState === "store" }))))))
            :
                React.createElement(StatusCards_1["default"], null),
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
            React.createElement(SearchBar_1["default"], { HeaderTitle: 'All Adverts', placeholder: 'Enter Brand/Ad Name', text: 'Create Advert', onClick: function () { return navigate('/advertisements-details'); } }),
            React.createElement(CategoryFilter_1["default"], null),
            React.createElement("div", { className: "row " },
                React.createElement("div", { className: "col-12" },
                    React.createElement("div", { className: "" },
                        React.createElement("div", { className: "card__body" },
                            React.createElement(Table_1["default"], { limit: '10', headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: advert_list_json_1["default"], renderBody: function (item, index) { return renderBody(item, index); } }))))))));
};
exports["default"] = Advertisements;
