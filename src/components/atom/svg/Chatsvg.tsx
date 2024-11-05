import * as React from "react"
import { JSX } from "react/jsx-runtime"
const Chatsvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
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
            d="M18.594 12.25a.656.656 0 0 1-.657.656H10.5a.656.656 0 1 1 0-1.312h7.438a.656.656 0 0 1 .656.656Zm-.657 2.844H10.5a.656.656 0 1 0 0 1.312h7.438a.656.656 0 1 0 0-1.312Zm7.22-1.531a10.73 10.73 0 0 1-10.72 10.718H5.25a1.531 1.531 0 0 1-1.531-1.531v-9.188a10.719 10.719 0 1 1 21.437 0Zm-1.313 0a9.406 9.406 0 0 0-18.813 0v9.187a.219.219 0 0 0 .219.219h9.188a9.417 9.417 0 0 0 9.406-9.407Z"
        />
    </svg>
)
export default Chatsvg