"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unused-expressions */
var Row_1 = require("./Row/Row");
var react_1 = require("react");
var Pagination = function (_a) {
    var data = _a.data, _b = _a.page, page = _b === void 0 ? 1 : _b, dataLength = _a.dataLength, onPageChange = _a.onPageChange, _c = _a.pageSize, pageSize = _c === void 0 ? 10 : _c;
    //let items: any = [];
    var pages = [];
    var _d = react_1.useState(1), from = _d[0], setFrom = _d[1];
    var _e = react_1.useState(pageSize), to = _e[0], setTo = _e[1];
    var _f = react_1.useState(false), reset = _f[0], setReset = _f[1];
    var _g = react_1.useState(5), endIndex = _g[0], setEndIndex = _g[1];
    var _h = react_1.useState(0), startIndex = _h[0], setStartIndex = _h[1];
    var _j = react_1.useState(false), hidePage = _j[0], setHidePage = _j[1];
    var currentPageLength = function () {
        return Math.ceil(dataLength / pageSize);
    };
    // if (data) {
    // 	items = useMemo(() => {
    // 		const lastItemIndex = page * pageSize;
    // 		const firstItemIndex = lastItemIndex - pageSize;
    // 		const activeItems = data?.slice(firstItemIndex, lastItemIndex);
    // 		return activeItems;
    // 	}, [page, pageSize]);
    // }
    var pageIndex = react_1.useMemo(function () {
        setTo(pageSize * page);
        setFrom(pageSize * page - pageSize + 1);
    }, [page, pageSize, to, from]);
    for (var x = 1; x <= currentPageLength(); x++) {
        pages.push(x);
    }
    var pageNext = function () {
        if (page >= endIndex) {
            setStartIndex(function (prev) { return prev + 5; });
            setEndIndex(function (prev) { return prev + 5; });
            onPageChange && onPageChange({ row: pageSize, page: page + 1 });
        }
        else {
            onPageChange && onPageChange({ row: pageSize, page: page + 1 });
        }
        pageIndex;
    };
    var pagePrevious = function () {
        if (page <= startIndex + 1) {
            setStartIndex(function (prev) { return prev - 5; });
            setEndIndex(function (prev) { return prev - 5; });
            onPageChange && onPageChange({ row: pageSize, page: page - 1 });
        }
        else {
            onPageChange && onPageChange({ row: pageSize, page: page - 1 });
        }
        pageIndex;
    };
    var pageLast = function () {
        setStartIndex(pages.length - 5);
        setEndIndex(pages.length);
        onPageChange && onPageChange({ row: pageSize, page: pages.length });
        pageIndex;
    };
    var resetPage = function () {
        setStartIndex(0);
        setEndIndex(5);
        onPageChange && onPageChange({ row: pageSize, page: 1 });
    };
    var resetTrigger = function () {
        setReset(!reset);
    };
    react_1.useEffect(function () {
        resetPage();
    }, [reset]);
    var updateRow = function (r) {
        onPageChange && onPageChange({ row: r, page: page });
    };
    react_1.useEffect(function () {
        if (pages.length - 5 === startIndex) {
            setHidePage(true);
        }
        if (pages[pages.length - 1] === pages[endIndex - 1]) {
            setHidePage(true);
        }
        return function () { return setHidePage(false); };
    }, [page, pageSize]);
    return (React.createElement("div", { className: "mt-10" },
        React.createElement("div", { className: "flex md:justify-between justify-center items-center" },
            React.createElement("div", { className: "md:block hidden" },
                React.createElement(Row_1["default"], { rowSize: pageSize, rowSizeChange: updateRow, reset: resetTrigger })),
            React.createElement("div", { className: "flex gap-2 items-center" },
                React.createElement("div", { className: "md:block hidden" },
                    React.createElement("p", { className: "text-md" },
                        from,
                        "-",
                        to,
                        " of ",
                        dataLength,
                        " Items")),
                React.createElement("div", { className: "flex gap-2" },
                    React.createElement("button", { disabled: !(page > 1), className: "\n\t\t\t\t\t\tw-8\n\t\t\t\t\t\th-8\n\t\t\t\t\t\trounded\n\t\t\t\t\t\tborder\n\t\t\t\t\t\tborder-grey-beau\n\t\t\t\t\t\ttext-blue\n\t\t\t\t\t\tflex\n\t\t\t\t\t\titems-center\n\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\tfocus:bg-blue\n\t\t\t\t\t\tfocus:text-white\n\t\t\t\t\t\ttb-btn\n\t\t\t\t\t\tdisabled:text-grey-beau\n\t\t\t\t\t\t", onClick: pagePrevious }, "Left"),
                    pages.length > 0 && (React.createElement("div", { className: "flex gap-1" },
                        pages.length > 0 &&
                            pages.slice(startIndex, endIndex).map(function (no, i) { return (React.createElement("button", { className: "\n                                    w-8\n                                    h-8\n\t\t\t\t\t\t\t\t\t" + (page === no ? "text-black" : "text-grey-beau") + "\n\t\t\t\t\t\t\t\t\t" + (page === no ? "font-bold" : "font-normal") + "\n                                    rounded\n                                    flex\n                                    items-center\n                                    justify-center\n                                    focus:ring\n\t\t\t\t\t\t\t\t\ttext-md\n                                    hover:text-black\n\t\t\t\t\t\t\t\t\t", key: i, onClick: function () {
                                    onPageChange
                                        ? onPageChange({ row: pageSize, page: no })
                                        : '';
                                    pageIndex;
                                } }, no)); }),
                        page !== pages.length && !hidePage && (React.createElement("div", { className: "flex items-center gap-1" },
                            React.createElement("p", null, "..."),
                            React.createElement("button", { className: "\n\t\t\t\t\t\t\t\t\t\tw-8\n\t\t\t\t\t\t\t\t\t\th-8\n\t\t\t\t\t\t\t\t\t\t" + (page === pages.length ? "text-black" : "text-grey-beau") + "\n\t\t\t\t\t\t\t\t\t\t" + (page === pages.length ? "font-bold" : "font-normal") + "\n\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\t\t\tfocus:ring\n\t\t\t\t\t\t\t\t\t\ttext-md\n\t\t\t\t\t\t\t\t\t\thover:text-black\n\t\t\t\t\t\t\t\t\t\t", onClick: function () {
                                    pageLast();
                                } }, pages.length))))),
                    React.createElement("button", { disabled: page === pages.length || !pages.length, className: "\n\t\t\t\t\t\tw-8\n\t\t\t\t\t\th-8\n\t\t\t\t\t\trounded\n\t\t\t\t\t\tborder\n\t\t\t\t\t\tborder-grey-beau\n\t\t\t\t\t\ttext-blue\n\t\t\t\t\t\tflex\n\t\t\t\t\t\ttb-btn\n\t\t\t\t\t\titems-center\n\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\tfocus:bg-blue\n\t\t\t\t\t\tfocus:text-white\n\t\t\t\t\t\tdisabled:text-grey-beau\n\t\t\t\t\t\t", onClick: pageNext }, "Right"))))));
};
exports["default"] = Pagination;
