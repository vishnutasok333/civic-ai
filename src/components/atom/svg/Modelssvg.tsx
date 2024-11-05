import * as React from "react"
import { JSX } from "react/jsx-runtime"
const Modelssvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        fill="none"
        {...props}
    >
        <path
            className='group-hover:fill-black'
            fill="#fff"
            d="M9.844 7a.656.656 0 0 1 .656-.656h13.125a.656.656 0 1 1 0 1.312H10.5A.656.656 0 0 1 9.844 7Zm13.781 6.344H10.5a.656.656 0 1 0 0 1.312h13.125a.656.656 0 1 0 0-1.312Zm0 7H10.5a.656.656 0 1 0 0 1.312h13.125a.656.656 0 1 0 0-1.312Zm-17.5-14h-1.75a.656.656 0 1 0 0 1.312h1.75a.656.656 0 1 0 0-1.312Zm0 7h-1.75a.656.656 0 1 0 0 1.312h1.75a.656.656 0 1 0 0-1.312Zm0 7h-1.75a.656.656 0 1 0 0 1.312h1.75a.656.656 0 1 0 0-1.312Z"
        />
    </svg>
)
export default Modelssvg