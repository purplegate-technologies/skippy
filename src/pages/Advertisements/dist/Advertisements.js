"use strict";
exports.__esModule = true;
require("./advertisements.css");
var StatusCards_1 = require("../../components/statusCard/StatusCards");
var Table_1 = require("../../components/Table/Table");
var advert_list_json_1 = require("../../assets/jsonData/advert-list.json");
var LinearGradientChart_1 = require("../../components/charts/LinearGradientChart");
var react_1 = require("react");
var data_1 = require("../../assets/data/data");
var SearchBar_1 = require("../../components/support/SearchBar");
var react_router_dom_1 = require("react-router-dom");
var CategoryFilter_1 = require("../../components/CategoryFilter/CategoryFilter");
var statsApis_1 = require("../../features/stats/statsApis");
var ThreeVdots_1 = require("../../assets/svg/ThreeVdots");
var Advertisements = function () {
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
    var _a = react_1.useState(userData), externalGraph = _a[0], setExternalGraph = _a[1];
    var _b = react_1.useState(userData), internalGraph = _b[0], setInternalGraph = _b[1];
    var data = statsApis_1.useGetAdvertStatsQuery().data;
    console.log(data === null || data === void 0 ? void 0 : data.graphStats, "useGetAdvertStatsQuery");
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
        '',
        'name',
        'email',
        'phone',
        'total orders',
        'total spend',
        'location'
    ];
    var renderHead = function (item, index) { return React.createElement("th", { key: index }, item); };
    var renderBody = function (item, index) { return (React.createElement("tr", { key: index },
        React.createElement("td", null, item.id),
        React.createElement("td", null, item.name),
        React.createElement("td", null, item.email),
        React.createElement("td", null, item.phone),
        React.createElement("td", null, item.total_orders),
        React.createElement("td", null, item.total_spend),
        React.createElement("td", null, item.location))); };
    return (React.createElement("div", null,
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
