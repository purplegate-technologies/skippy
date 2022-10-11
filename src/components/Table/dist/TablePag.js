"use strict";
exports.__esModule = true;
exports.ETableType = void 0;
var Pagination_1 = require("../Pagination/Pagination");
var react_1 = require("react");
var ETableType;
(function (ETableType) {
    ETableType["LINE"] = "line";
    ETableType["BORDER"] = "border";
})(ETableType = exports.ETableType || (exports.ETableType = {}));
var TablePag = function (_a) {
    var type = _a.type, column = _a.column, onPage = _a.onPage, rowSize = _a.rowSize, totalCount = _a.totalCount, _b = _a.pagination, pagination = _b === void 0 ? true : _b, currentPage = _a.currentPage, data = _a.data;
    var _c = react_1.useState(1), defaultPage = _c[0], setDefaultPage = _c[1];
    var _d = react_1.useState(10), defaultRow = _d[0], setDefaultRow = _d[1];
    var updatePage = function (e) {
        setDefaultRow(e.row);
        setDefaultPage(e.page);
    };
    var totalData = function () {
        if (totalCount) {
            return totalCount;
        }
        return data === null || data === void 0 ? void 0 : data.length;
    };
    var items = react_1.useMemo(function () {
        if (!totalCount && !currentPage && !rowSize && !onPage && pagination) {
            var lastItemIndex = defaultPage * defaultRow;
            var firstItemIndex = lastItemIndex - defaultRow;
            var activeItems = data === null || data === void 0 ? void 0 : data.slice(firstItemIndex, lastItemIndex);
            return activeItems;
        }
        else {
            return [];
        }
    }, [defaultPage, defaultRow, data, currentPage, onPage, pagination, rowSize, totalCount]);
    if (!totalCount && !currentPage && !rowSize && !onPage && pagination) {
    }
    return (React.createElement(React.Fragment, null,
        type === 'line' && (React.createElement("div", { className: "bg-white py-4 rounded-lg" },
            React.createElement("table", { className: "table-auto w-full rounded-lg divide-y divide-grey-beau bg-white" },
                React.createElement("thead", null,
                    React.createElement("tr", null, column === null || column === void 0 ? void 0 : column.map(function (item, index) { return (React.createElement("th", { key: index, className: "px-6 py-4 text-left text-base font-bold" }, item.name)); }))),
                data && data.length > 0 ? (React.createElement(React.Fragment, null,
                    React.createElement("tbody", { className: "divide-y divide-grey-beau" },
                        !pagination &&
                            data.map(function (obj, index) { return (React.createElement("tr", { key: index, className: "hover:bg-white-azure" }, column.map(function (item, index) { return (React.createElement("td", { key: index, className: "px-6 py-5 text-left text-sm" }, obj[(item === null || item === void 0 ? void 0 : item.key) || item.name] || item.defaultValue)); }))); }),
                        !totalCount &&
                            pagination &&
                            items.map(function (obj, index) { return (React.createElement("tr", { key: index, className: "hover:bg-white-azure" }, column.map(function (item, index) { return (React.createElement("td", { key: index, className: "px-6 py-5 text-left text-sm" }, obj[(item === null || item === void 0 ? void 0 : item.key) || item.name] || item.defaultValue)); }))); }),
                        totalCount &&
                            pagination &&
                            data.map(function (obj, index) { return (React.createElement("tr", { key: index, className: "hover:bg-white-azure" }, column.map(function (item, index) { return (React.createElement("td", { key: index, className: "px-6 py-5 text-left text-sm" }, obj[(item === null || item === void 0 ? void 0 : item.key) || item.name] || item.defaultValue)); }))); })))) : (React.createElement("tbody", { className: "" },
                    React.createElement("tr", null,
                        React.createElement("td", { colSpan: column === null || column === void 0 ? void 0 : column.length, className: "text-center p-10 text-2xl font-bold" }, "No data"))))),
            pagination && (React.createElement("div", { className: "px-4" },
                React.createElement(Pagination_1["default"], { data: data, dataLength: totalData(), pageSize: rowSize ? rowSize : defaultRow, onPageChange: onPage ? onPage : updatePage, page: currentPage ? currentPage : defaultPage }))))),
        type === ETableType.BORDER && (React.createElement(React.Fragment, null,
            React.createElement("table", { className: "tb w-full border-separate drop-shadow-lg", cellSpacing: 0, style: {
                    borderSpacing: '0 1rem'
                } },
                React.createElement("thead", { className: "bg-white-azure border border-grey-beau" },
                    React.createElement("tr", null, column === null || column === void 0 ? void 0 : column.map(function (item, index) { return (React.createElement("th", { key: index, className: "px-6 py-4 text-left text-base font-bold" }, item.name)); }))),
                data && data.length > 0 ? (React.createElement("tbody", { className: "divide-y divide-grey-beau" },
                    !pagination &&
                        data.map(function (obj, index) { return (React.createElement("tr", { key: index, className: "bg-white hover:bg-white-azure" }, column.map(function (item, index) { return (React.createElement(React.Fragment, null,
                            React.createElement("td", { key: index, className: "border-y-8 border-white-azure px-6 py-5 text-left text-sm tracking-wider" }, obj[(item === null || item === void 0 ? void 0 : item.key) || item.name] || item.defaultValue))); }))); }),
                    !totalCount &&
                        pagination &&
                        items.map(function (obj, index) { return (React.createElement("tr", { key: index, className: "bg-white hover:bg-white-azure" }, column.map(function (item, index) { return (React.createElement(React.Fragment, null,
                            React.createElement("td", { key: index, className: "border-y-8 border-white-azure px-6 py-5 text-left text-sm tracking-wider" }, obj[(item === null || item === void 0 ? void 0 : item.key) || item.name] || item.defaultValue))); }))); }),
                    totalCount &&
                        pagination &&
                        data.map(function (obj, index) { return (React.createElement("tr", { key: index, className: "bg-white hover:bg-white-azure" }, column.map(function (item, index) { return (React.createElement(React.Fragment, null,
                            React.createElement("td", { key: index, className: "border-y-8 border-white-azure px-6 py-5 text-left text-sm tracking-wider" }, obj[(item === null || item === void 0 ? void 0 : item.key) || item.name] || item.defaultValue))); }))); }))) : (React.createElement("tbody", { className: "divide-y divide-grey-slate" },
                    React.createElement("tr", null,
                        React.createElement("td", { colSpan: column === null || column === void 0 ? void 0 : column.length, className: "text-center p-10 text-2xl font-bold" }, "No data"))))),
            pagination && (React.createElement("div", { className: "px-4" },
                React.createElement(Pagination_1["default"], { data: data, dataLength: totalData(), pageSize: rowSize ? rowSize : defaultRow, onPageChange: onPage ? onPage : updatePage, page: currentPage ? currentPage : defaultPage })))))));
};
exports["default"] = TablePag;
