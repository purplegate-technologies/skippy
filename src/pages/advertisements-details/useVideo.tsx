import * as React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export const useVideoJS = (videoJsOptions: any) => {
    const videoNode = React.useRef<HTMLVideoElement | undefined | any>();
    const player = React.useRef<videojs.Player>();

  React.useEffect(() => {
    player.current = videojs(videoNode.current, videoJsOptions,)

    return () => {
        if (player.current) {
            player.current.dispose();
          }
    }
//   }, [changedKey])
  }, [])

  const Video = React.useCallback(
      () => {},[],
    // ({children, ...props}) => {
    //   return (
    //     <div data-vjs-player key={changedKey}>
    //       <video ref={videoNode} className="video-js" {...props}>
    //         {children}
    //       </video>
    //     </div>
    //   )
    // },
    // [changedKey],
  )
  return {Video, player: player.current}
}

//  useage

// import * as React from 'react'
// import {useVideoJs} from './use-video-js'

// const MyComponent = () => {
//   const {Video} = useVideoJS({
//       poster: video.poster,
//       sources: [{src: video.url}],
//       controls: true,
//       playbackRates: [0.5, 1, 1.5, 2],
//       responsive: true,
//   })

//   return (
//   <Video poster={video.poster} playsInline muted>
//       <track
//           src={video.subtitlesUrl}
//           kind="subtitles"
//           srcLang="en"
//           label="English"
//       />
//   </Video>
//   )
// }
