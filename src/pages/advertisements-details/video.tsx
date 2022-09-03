import * as React from "react";
import videojs from "video.js";
import "./advertisement.css"
import 'video.js/dist/video-js.css';
// import 'videojs-playlist';


interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
  className?: string
  onReady?: any
}

const initialOptions: videojs.PlayerOptions = {

  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false
    }
  }
};

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options, className, onReady }) => {
  const videoNode = React.useRef<HTMLVideoElement | undefined | any>();
  const player = React.useRef<videojs.Player>();


// player.current?.canPlayType()

  React.useEffect(() => {
    // player.current?.cancelFullScreen()
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options,
      // onReady && onReady(player);
    }).ready(function () {
      // console.log('onPlayerReady', this);
    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options, onReady]);

  return <>
    <div data-vjs-player>
  <video ref={videoNode} className={`${className} video-js video-js vjs-big-play-centered overflow-hidden h-max`} />
      <div
        className="relative embed-responsive embed-responsive-1by1 w-full overflow-hidden"
      >
        {/* <iframe allowFullScreen className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=2&amp;origin=https%3A%2F%2Fmdbootstrap.com"
          // allowfullscreen=""
          data-gtm-yt-inspected-2340190_699="true"
        // id="240632615"
        ></iframe> */}
      </div>
    </div>
  </>;
};

export default VideoPlayer;


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
