import * as React from "react"
import { JSX } from "react/jsx-runtime"
const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#2DA6D2"
      d="m16.692 6.433-4.375-4.375a.625.625 0 0 0-.442-.183h-7.5a1.25 1.25 0 0 0-1.25 1.25v13.75a1.25 1.25 0 0 0 1.25 1.25h11.25a1.25 1.25 0 0 0 1.25-1.25v-10a.624.624 0 0 0-.183-.442Zm-4.817.442V3.437l3.438 3.438h-3.438Z"
    />
  </svg>
)
export default SvgComponent
