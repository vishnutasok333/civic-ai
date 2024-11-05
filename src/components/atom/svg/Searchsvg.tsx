import * as React from "react"
import { JSX } from "react/jsx-runtime"
const SearchSvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
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
            d="m25.12 23.88-5.477-5.475a9.637 9.637 0 1 0-1.237 1.237l5.475 5.477a.876.876 0 0 0 1.238-1.238ZM4.374 12.25a7.875 7.875 0 1 1 7.875 7.875 7.884 7.884 0 0 1-7.875-7.875Z"
        />
    </svg>
)
export default SearchSvg