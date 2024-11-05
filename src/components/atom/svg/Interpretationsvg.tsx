import * as React from "react"
import { JSX } from "react/jsx-runtime"
const Interpretationsvg = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
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
            d="M10.835 14.067a.875.875 0 0 0-.954.189l-2.368 2.369H5.25a.875.875 0 0 0-.875.875v4.375a.875.875 0 0 0 .875.875h2.263l2.368 2.37a.875.875 0 0 0 1.494-.62v-9.625a.875.875 0 0 0-.54-.808Zm-1.21 8.321-1.13-1.132a.875.875 0 0 0-.62-.256h-1.75v-2.625h1.75a.875.875 0 0 0 .62-.256l1.13-1.132v5.401Zm7-2.7a4.436 4.436 0 0 1-2.188 3.818.875.875 0 0 1-.874-1.512 2.68 2.68 0 0 0 0-4.613.875.875 0 0 1 .874-1.512 4.435 4.435 0 0 1 2.188 3.819Zm6.744-10.682L17.244 2.88a.876.876 0 0 0-.619-.256h-10.5a1.75 1.75 0 0 0-1.75 1.75v8.75a.875.875 0 1 0 1.75 0v-8.75h9.625v5.25a.875.875 0 0 0 .875.875h5.25v13.125h-3.5a.875.875 0 1 0 0 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75v-14a.875.875 0 0 0-.256-.62ZM17.5 5.612l3.138 3.138H17.5V5.612Z"
        />
    </svg>
)
export default Interpretationsvg