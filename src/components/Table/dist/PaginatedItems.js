"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PaginatedItems = function (_a) {
    var itemsPerPage = _a.itemsPerPage;
    // We start with an empty list of items.
    var _b = react_1.useState(null), currentItems = _b[0], setCurrentItems = _b[1];
    var _c = react_1.useState(0), pageCount = _c[0], setPageCount = _c[1];
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    var _d = react_1.useState(0), itemOffset = _d[0], setItemOffset = _d[1];
    react_1.useEffect(function () {
        // Fetch items from another resources.
        var endOffset = itemOffset + itemsPerPage;
        console.log("Loading items from " + itemOffset + " to " + endOffset);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    // Invoke when user click to request another page.
    var handlePageClick = function (event) {
        var newOffset = (event.selected * itemsPerPage) % items.length;
        console.log("User requested page number " + event.selected + ", which is offset " + newOffset);
        setItemOffset(newOffset);
    };
    return (react_1["default"].createElement("div", null));
};
exports["default"] = PaginatedItems;
