import * as React from "react"
import { SVGProps } from "react"

const CreateAdsPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.388 4v3.612H12v.776H8.387V12h-.775V8.387H4v-.775h3.612V4h.776Z"
      fill="#fff"
    />
    <circle
      cx={8}
      cy={8}
      r={7.5}
      fill="#D8D8D8"
      fillOpacity={0.01}
      stroke="#fff"
    />
  </svg>
)

export default CreateAdsPlus
