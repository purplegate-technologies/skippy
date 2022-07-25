// interface IProps extends React.SVGProps<SVGSVGElement> {
//     hovering: boolean
//   }
  
const ThreeVdots = (props: React.SVGProps<SVGSVGElement> ) => (
  <svg
    width={4}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#171837"
    />
  </svg>
)

export default ThreeVdots
