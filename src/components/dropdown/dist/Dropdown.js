"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dropdown.css");
// const clickOutSideRef = (content_ref: IContent, toggle_ref: IToggle ) => {
var clickOutSideRef = function (content_ref, toggle_ref) {
    document.addEventListener("mousedown", function (e) {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active');
        }
        else {
            // user click outside the toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove("active");
            }
        }
    });
};
var Dropdown = function (_a) {
    var icon = _a.icon, badge = _a.badge, customToggle = _a.customToggle, contentData = _a.contentData, renderItems = _a.renderItems, renderFooter = _a.renderFooter, _b = _a.className, className = _b === void 0 ? "" : _b, children = _a.children;
    var dropdown_toggle_el = react_1.useRef(null);
    var dropdown_content_el = react_1.useRef(null);
    clickOutSideRef(dropdown_content_el, dropdown_toggle_el);
    return (React.createElement("div", { className: "dropdown" },
        React.createElement("button", { ref: dropdown_toggle_el, className: "dropdown__toggle" },
            React.createElement(React.Fragment, null,
                icon && React.createElement("i", { className: icon }),
                badge && React.createElement("span", { className: "dropdown__toggle-badge" }, badge),
                customToggle && customToggle(),
                children && (children))),
        React.createElement("div", { ref: dropdown_content_el, className: "dropdown__content" },
            contentData && renderItems && contentData.map(function (item, index) { return renderItems(item, index); }),
            !contentData && "No Content",
            renderFooter && React.createElement("div", { className: "dropdown__footer" }, renderFooter()))));
};
exports["default"] = Dropdown;
