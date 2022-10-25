"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CreateAdsPlus_1 = require("../../assets/svg/CreateAdsPlus");
var SearchBar_1 = require("../../components/support/SearchBar");
var Table_1 = require("../../components/Table/Table");
var react_router_dom_1 = require("react-router-dom");
var column = [
    {
        name: 'App (ID)',
        key: 'id'
    },
    {
        name: 'User TYPE',
        key: 'email'
    },
    {
        name: 'Registration  Date',
        key: 'date'
    },
    {
        name: 'Last Active time',
        key: 'location'
    },
    {
        name: 'Status',
        key: 'five'
    },
    {
        name: 'Action',
        key: 'six'
    }
];
var data = [
    {
        one: 'data1',
        two: 'data2',
        three: 'data',
        four: 'data4'
    },
    {
        one: 'data1',
        two: 'data2',
        // three: 'data3',
        four: 'data4'
    },
    {
        one: 'data1',
        two: 'data2',
        three: 'data3',
        four: 'data4'
    }
];
var customerTableHead = [
    'App (ID)',
    'User TYPE',
    'Registration  Date',
    'Last Active time',
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
    React.createElement("td", null,
        React.createElement(react_router_dom_1.Link, { to: "/user-details", className: 'underline text-blue-600' }, item.location)))); };
var Administrators = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    var _b = react_1.useState(10), rowSize = _b[0], setRowSize = _b[1];
    var _c = react_1.useState([]), content = _c[0], setContent = _c[1];
    var onPage = function (e) {
        setRowSize(e.row);
        setCurrentPage(e.page);
    };
    var getData = function () {
        fetch("https://jsonplaceholder.typicode.com/posts?_page=" + currentPage + "&_limit=" + rowSize)
            .then(function (response) { return response.json(); })
            .then(function (json) { return setContent(json); });
    };
    react_1.useEffect(function () {
        getData();
    }, [currentPage, rowSize]);
    return (React.createElement("div", null,
        React.createElement("div", { className: "card" },
            React.createElement(SearchBar_1["default"], { HeaderTitle: 'Administrators', text: "Create Admin", onClick: function () { return navigate('/settings'); }, prefixIcon: React.createElement(CreateAdsPlus_1["default"], null) }),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-12" },
                    React.createElement("div", { className: "" },
                        React.createElement("div", { className: "card__body" },
                            React.createElement(Table_1["default"], { limit: 10, headData: customerTableHead, renderHead: function (item, index) { return renderHead(item, index); }, bodyData: [], renderBody: function (item, index) { return renderBody(item, index); } }),
                            React.createElement("div", { className: "p-8 bg-other-ghost" }))))))));
};
exports["default"] = Administrators;
