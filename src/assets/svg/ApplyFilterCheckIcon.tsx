
import * as React from "react"
import { SVGProps } from "react"

const ApplyFilterCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m3.733 7.338-2.8-2.907L0 5.4l3.733 3.877 8-8.308L10.8 0 3.733 7.338Z"
      fill="#fff"
    />
  </svg>
)

export default ApplyFilterCheckIcon
