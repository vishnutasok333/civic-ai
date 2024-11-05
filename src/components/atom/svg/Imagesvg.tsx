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
      fill="#050A30"
      d="M20.25 3.75H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5Zm0 1.5v9.633l-2.444-2.443a1.5 1.5 0 0 0-2.122 0l-1.875 1.875-4.125-4.125a1.5 1.5 0 0 0-2.12 0L3.75 14.003V5.25h16.5ZM3.75 16.125l4.875-4.875 7.5 7.5H3.75v-2.625Zm16.5 2.625h-2.003l-3.375-3.375 1.875-1.875 3.503 3.504v1.746ZM13.5 9.375a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
    />
  </svg>
)
export default SvgComponent
