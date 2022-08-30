"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var video_js_1 = require("video.js");
require("./advertisement.css");
require("video.js/dist/video-js.css");
var initialOptions = {
    controls: true,
    fluid: true,
    controlBar: {
        volumePanel: {
            inline: false
        }
    }
};
var VideoPlayer = function (_a) {
    var options = _a.options, className = _a.className, onReady = _a.onReady;
    var videoNode = React.useRef();
    var player = React.useRef();
    React.useEffect(function () {
        player.current = video_js_1["default"](videoNode.current, __assign(__assign({}, initialOptions), options)).ready(function () {
            // console.log('onPlayerReady', this);
        });
        return function () {
            if (player.current) {
                player.current.dispose();
            }
        };
    }, [options, onReady]);
    return React.createElement(React.Fragment, null,
        React.createElement("div", { "data-vjs-player": true },
            React.createElement("video", { ref: videoNode, className: className + " video-js video-js vjs-big-play-centered overflow-hidden h-max" }),
            React.createElement("div", { className: "relative pt-[100%] embed-responsive embed-responsive-1by1 w-full overflow-hidden" })));
};
exports["default"] = VideoPlayer;
// import React from 'react'
// const video = () => {
//   return (
//     <div>
//       <div
//         className="pt-[100%] embed-responsive embed-responsive-1by1 relative w-full overflow-hidden"
//       >
//         <iframe
//           className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
//           src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=2&amp;origin=https%3A%2F%2Fmdbootstrap.com"
//         // allowfullscreen=""
//         data-gtm-yt-inspected-2340190_699="true"
//         // id="240632615"
//         ></iframe>
//       </div>
//     </div>
//   )
// }
// export default video
