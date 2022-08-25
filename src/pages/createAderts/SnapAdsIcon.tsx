// import React from 'react'

// const SnapAdsIcon = () => {
//   return (
//     <div>SnapAdsIcon</div>
//   )
// }

// export default SnapAdsIcon


import * as React from "react"
import { SVGProps } from "react"

const SnapAdsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={10} fill="#FFC106" fillOpacity={0.1} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.563 29.438c.375.375.812.562 1.312.562h21.25c.52 0 .963-.188 1.328-.563.365-.375.547-.812.547-1.312v-16.25c0-.5-.182-.938-.547-1.313A1.783 1.783 0 0 0 30.125 10H8.875c-.5 0-.938.188-1.313.563-.375.374-.562.812-.562 1.312v16.25c0 .5.188.938.563 1.313Zm3.937-9.813c.25 0 .463-.088.64-.266a.91.91 0 0 0 .266-.672v-3.25h3.188a.85.85 0 0 0 .64-.28.964.964 0 0 0 .266-.688.91.91 0 0 0-.938-.906H11.47a.91.91 0 0 0-.672.265.91.91 0 0 0-.266.672v4.219c0 .25.094.463.281.64a.964.964 0 0 0 .688.266Zm11.969 6.813h4.093a.91.91 0 0 0 .672-.266.91.91 0 0 0 .266-.672v-4.219a.85.85 0 0 0-.281-.64.926.926 0 0 0-.657-.266.91.91 0 0 0-.671.266.91.91 0 0 0-.266.672v3.25h-3.188a.85.85 0 0 0-.64.28.925.925 0 0 0-.266.657c0 .27.089.495.266.672a.91.91 0 0 0 .672.265Zm6.656 1.687H8.875v-16.25h21.25v16.25Z"
      fill="#FFC106"
    />
  </svg>
)

export default SnapAdsIcon
