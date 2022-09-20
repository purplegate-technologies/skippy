"use strict";
exports.__esModule = true;
var useClickOutside_1 = require("../../app/useClickOutside");
function Modal(_a) {
    var control = _a.control, close = _a.close, children = _a.children, _b = _a.padding, padding = _b === void 0 ? '8' : _b;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "fixed h-screen w-screen bg-black top-0 left-0 bg-opacity-40 z-40 " + (control ? 'block' : 'hidden'), onClick: function () { return close(false); } }),
        React.createElement(useClickOutside_1.ClickOutside, { onclickoutside: function () { return close(false); }, className: "bg-white fixed z-50 rounded-xl min-w-300 w-1/3 left-1/3 p-" + padding, style: {
                top: control ? '50%' : '-50%',
                opacity: control ? 1 : 0,
                transform: 'translateY(-50%)'
            } }, control && (React.createElement("div", { className: "h-fit f-grow", style: { position: 'relative' } }, children)))));
}
exports["default"] = Modal;
// // const [open, setOpen] = useState(false);
// <Button size="sm" onClick={() => setOpen(true)}>
//     Open modal
// </Button>
// <Modal control={open} close={setOpen}>
// Lord Gerald
// </Modal>
