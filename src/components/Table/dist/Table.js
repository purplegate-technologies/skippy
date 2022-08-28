"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
require("./table.css");
var Table = function (_a) {
    var limit = _a.limit, renderHead = _a.renderHead, bodyData = _a.bodyData, headData = _a.headData, renderBody = _a.renderBody;
    var initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;
    var _b = react_1.useState(initDataShow), dataShow = _b[0], setDataShow = _b[1];
    var _c = react_1.useState(0), currPage = _c[0], setCurrPage = _c[1];
    // new
    var _d = react_1.useState(5), pageNumberLimit = _d[0], setpageNumberLimit = _d[1];
    var _e = react_1.useState(5), maxPageNumberLimit = _e[0], setmaxPageNumberLimit = _e[1];
    var _f = react_1.useState(0), minPageNumberLimit = _f[0], setminPageNumberLimit = _f[1];
    // let pages = 1
    var pages = 1;
    var range = [];
    if (limit !== undefined) {
        var page = Math.floor(bodyData.length / Number(limit));
        pages = bodyData.length % Number(limit) === 0 ? page : page + 1;
        // range = [...Array(pages).keys()]
        range = __spreadArrays(Array(pages));
    }
    var selectPage = function (page) {
        var start = Number(limit) * page;
        var end = start + Number(limit);
        setDataShow(bodyData.slice(start, end));
        setCurrPage(page);
    };
    var handleNextbtn = function () {
        setCurrPage(currPage + 1);
        selectPage(currPage + 1);
        if (currPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    var handlePrevbtn = function () {
        setCurrPage(currPage - 1);
        // selectPage(currPage - 1)
        if ((currPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };
    var pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = React.createElement("li", { onClick: handleNextbtn }, " \u2026 ");
    }
    var pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = React.createElement("li", { onClick: handlePrevbtn }, " \u2026 ");
    }
    //   const handleLoadMore = () => {
    //     setitemsPerPage(itemsPerPage + 5);
    //   };
    return (React.createElement("div", null,
        React.createElement("div", { className: "table-wrapper" },
            React.createElement("table", null,
                headData && renderHead ? (React.createElement("thead", null,
                    React.createElement("tr", null, headData.map(function (item, index) { return renderHead(item, index); })))) : null,
                bodyData && renderBody ? (React.createElement("tbody", null, dataShow.map(function (item, index) { return renderBody(item, index); }))) : (React.createElement("body", { className: 'divide-y divide-grey-slate' },
                    React.createElement("tr", null,
                        React.createElement("td", { 
                            // colSpan={}
                            className: 'text-center p-10 text-2l font-bold' }, "No Data")))))),
        React.createElement("div", { className: 'footerPagination' },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                React.createElement("select", { className: 'tableSelectDropDown' },
                    React.createElement("option", { disabled: true }, "Items per page"),
                    React.createElement("option", null, "10"),
                    React.createElement("option", null, "50"),
                    React.createElement("option", null, "100")),
                " ",
                React.createElement("span", { style: { marginLeft: '10px' } }, "Items per page")),
            pages > 0 ? (React.createElement("div", { className: "table__pagination" },
                React.createElement("button", { onClick: handlePrevbtn, disabled: currPage === pages[0] ? true : false }, "Prev"),
                range.map(function (item, index) {
                    if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
                        return React.createElement("div", { key: index, className: "table__pagination-item " + (currPage === index && 'active'), onClick: function () { return selectPage(index); } }, item);
                    }
                    else {
                        return null;
                    }
                }),
                React.createElement("button", { onClick: handleNextbtn, disabled: currPage === pages[pages.length - 1] ? true : false }, "Next"))) : null)));
};
exports["default"] = Table;
