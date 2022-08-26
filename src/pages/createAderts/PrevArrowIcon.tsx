import * as React from "react"
import { SVGProps } from "react"

const PrevArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.094 21.684.252 11.604a.875.875 0 0 1-.196-.288A.861.861 0 0 1 0 11c0-.115.019-.22.056-.316a.875.875 0 0 1 .196-.287L10.094.316A1.05 1.05 0 0 1 10.879 0c.317 0 .579.105.785.316.224.23.336.503.336.818 0 .316-.112.59-.336.819L2.832 11l8.832 9.047c.224.23.331.503.322.819-.01.316-.117.579-.322.79a1.08 1.08 0 0 1-.8.344c-.308 0-.565-.105-.77-.316Z"
      fill="#CFD1D5"
    />
  </svg>
)

export default PrevArrowIcon
