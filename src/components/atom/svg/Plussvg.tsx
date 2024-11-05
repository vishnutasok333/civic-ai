import * as React from "react"
import { JSX } from "react/jsx-runtime"
const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
    className="fill-[#4D4DFF] group-hover:fill-white"
      fill="#4D4DFF"
      d="M20.813 12a.562.562 0 0 1-.563.563h-7.688v7.687a.562.562 0 1 1-1.124 0v-7.688H3.75a.563.563 0 0 1 0-1.124h7.688V3.75a.563.563 0 0 1 1.124 0v7.688h7.688a.562.562 0 0 1 .563.562Z"
    />
  </svg>
)
export default SvgComponent
