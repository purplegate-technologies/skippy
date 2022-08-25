
import * as React from "react"
import { SVGProps } from "react"

const EditAdsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={10} fill="#0C90F3" fillOpacity={0.095} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10 25.67.03-3.374c0-.18.058-.359.205-.508l9.09-9.257 2.288-2.33a.717.717 0 0 1 .997 0l3.284 3.345a.75.75 0 0 1 0 1.015L14.516 26.148c-.146.12-.322.209-.498.209l-3.314.03c-.176 0-.352-.09-.499-.21-.146-.119-.205-.328-.205-.507Zm.704 2.897h18.592a.72.72 0 0 1 .704.716.72.72 0 0 1-.704.717H10.704a.72.72 0 0 1-.704-.717.72.72 0 0 1 .704-.716Zm13.695-14.513-1.29 1.314-2.288-2.33 1.29-1.313 2.288 2.329Zm-4.575 0-8.387 8.54v2.33h2.287l8.387-8.541-2.287-2.33Z"
      fill="#0C90F3"
    />
  </svg>
)

export default EditAdsIcon
