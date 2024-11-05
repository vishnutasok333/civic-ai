import * as React from "react"
import { JSX } from "react/jsx-runtime"
const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#050A30"
      d="M14.36 13.764a.424.424 0 0 1 .011.607.422.422 0 0 1-.607-.01L9 9.597 4.236 14.36a.422.422 0 0 1-.597-.597L8.403 9 3.639 4.236a.422.422 0 0 1 .597-.597L9 8.403l4.764-4.764a.422.422 0 0 1 .597.597L9.597 9l4.764 4.764Z"
    />
  </svg>
)
export default SvgComponent
