"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_paginate_1 = require("react-paginate");
require("./table.css");
var Table = function (_a) {
    var limit = _a.limit, renderHead = _a.renderHead, bodyData = _a.bodyData, headData = _a.headData, renderBody = _a.renderBody, isFetching = _a.isFetching, isLoading = _a.isLoading;
    var _b = react_1.useState(10), itemsPerPage = _b[0], setItemsPerPage = _b[1];
    // for react paginate
    // We start with an empty list of items.setCurrentItems
    var _c = react_1.useState([]), currentItems = _c[0], setCurrentItems = _c[1];
    var _d = react_1.useState(0), pageCount = _d[0], setPageCount = _d[1];
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    var _e = react_1.useState(0), itemOffset = _e[0], setItemOffset = _e[1];
    react_1.useEffect(function () {
        // Fetch items from another resources.
        var endOffset = itemOffset + itemsPerPage;
        console.log("Loading items from " + itemOffset + " to " + endOffset);
        setCurrentItems(bodyData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(bodyData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, bodyData]);
    react_1.useEffect(function () {
        setCurrentItems(bodyData);
    }, [bodyData]);
    // Invoke when user click to request another page.
    var handlePageClick = function (event) {
        var newOffset = (event.selected * itemsPerPage) % bodyData.length;
        console.log("User requested page number " + event.selected + ", which is offset " + newOffset);
        setItemOffset(newOffset);
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "table-wrapper" },
            React.createElement("table", null,
                headData && renderHead ? (React.createElement("thead", null,
                    React.createElement("tr", null, headData.map(function (item, index) { return renderHead(item, index); })))) : null,
                isFetching ? React.createElement("td", { className: 'text-center w-full p-5 text-2l font-bold' }, "Fetching Data") : React.createElement(React.Fragment, null, currentItems && (currentItems !== null || undefined) ? (React.createElement("tbody", null, 
                // dataShow?.map((item: any, index: number) => renderBody(item, index))
                currentItems === null || 
                // dataShow?.map((item: any, index: number) => renderBody(item, index))
                currentItems === void 0 ? void 0 : 
                // dataShow?.map((item: any, index: number) => renderBody(item, index))
                currentItems.map(function (item, index) { return renderBody(item, index); }))) : (React.createElement("tbody", { className: '' },
                    React.createElement("tr", null,
                        React.createElement("td", { className: 'text-center w-full p-5 text-2l font-bold' }, "No Data"))))))),
        React.createElement("div", { className: 'footerPagination' },
            React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                React.createElement("select", { value: itemsPerPage, className: 'tableSelectDropDown', onChange: function (e) { setItemsPerPage(e.target.value); } },
                    React.createElement("option", { disabled: true }, "Items per page"),
                    React.createElement("option", { value: "5" }, "5"),
                    React.createElement("option", { value: "10" }, "10"),
                    React.createElement("option", { value: "15" }, "15")),
                " ",
                React.createElement("span", { style: { marginLeft: '10px' } }, "Items per page")),
            React.createElement(react_paginate_1["default"], { pageCount: pageCount, onPageChange: handlePageClick, disabledClassName: "disabled", 
                // initialPage={0}
                nextLabel: "next >", previousLabel: "< previous", breakLabel: "...", breakClassName: "break-me", marginPagesDisplayed: 2, 
                // pageRangeDisplayed={5}
                breakLinkClassName: "page-link", containerClassName: "table__pagination", pageClassName: "table__pagination-item", pageLinkClassName: "table__pagination-item", previousClassName: "page-item mr-3", previousLinkClassName: "page-link", nextClassName: "page-item ml-3", nextLinkClassName: "page-link", activeClassName: "active", activeLinkClassName: "active" }))));
};
exports["default"] = Table;
