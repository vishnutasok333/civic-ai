import * as React from "react"
import { JSX } from "react/jsx-runtime"
const Translatesvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
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
            d="m27.032 23.233-6.125-12.25a.874.874 0 0 0-1.565 0l-2.375 4.75a9.626 9.626 0 0 1-5.154-1.85A11.337 11.337 0 0 0 14.84 7H17.5a.875.875 0 1 0 0-1.75h-6.125V3.5a.875.875 0 0 0-1.75 0v1.75H3.5A.875.875 0 0 0 3.5 7h9.585a9.599 9.599 0 0 1-2.585 5.726 9.596 9.596 0 0 1-2.078-3.39.875.875 0 1 0-1.65.583 11.334 11.334 0 0 0 2.415 3.972A9.576 9.576 0 0 1 3.5 15.75a.875.875 0 0 0 0 1.75 11.316 11.316 0 0 0 7-2.415 11.394 11.394 0 0 0 5.626 2.33l-2.91 5.818a.876.876 0 0 0 1.566.784L16.29 21h7.669l1.508 3.017a.875.875 0 1 0 1.565-.784Zm-9.867-3.983 2.96-5.918 2.959 5.918h-5.919Z"
        />
    </svg>
)
export default Translatesvg
