// import React from 'react'

// const NextArrowIcon = () => {
//   return (
//     <div>NextArrowIcon</div>
//   )
// }

// export default NextArrowIcon


import * as React from "react"
import { SVGProps } from "react"

const NextArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.323 21.656a1.225 1.225 0 0 1-.322-.804c-.01-.306.098-.574.322-.804l8.842-9.04L.323 1.966a1.134 1.134 0 0 1-.322-.79C-.01.862.099.59.323.36.53.13.786.01 1.095.001c.309-.01.576.1.8.33l9.852 10.074a.878.878 0 0 1 .197.287.86.86 0 0 1 .056.316.86.86 0 0 1-.056.315.878.878 0 0 1-.197.287L1.895 21.684c-.206.21-.463.316-.772.316-.308 0-.575-.115-.8-.344Z"
      fill="#516CF5"
    />
  </svg>
)

export default NextArrowIcon
