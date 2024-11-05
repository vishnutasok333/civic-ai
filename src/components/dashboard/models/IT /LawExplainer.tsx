import { Paperclip } from "lucide-react"
import LawExplainerCard from "../../../atom/defaultcard/LawExplainerCard"
// import Skeleton from "../../atom/skeleton/skeleton";

export const LawExplainer = () => {


    return (
        // <div className="flex flex-col justify-center items-center w-full h-full">
        //     <div className="grid grid-cols-10 grid-rows-4 items-center basis-1/4 w-full">
        //         <div className="flex row-start-2 col-span-full xl:col-start-2 xl:col-span-8">
        //             <div className="chat-container overflow-y-auto w-full">
        //                 <LawExplainerCard />
        //             </div>
        //         </div>

        //         <div className="flex sticky h-[180px] flex-col items-center justify-end bottom-0 row-start-4 col-span-full xl:col-start-2 xl:col-span-8">
        //             <div className="flex min-h-[80px] max-h-full py-[18px] px-[24px] justify-end flex-col items-center gap-[10px] rounded-[10px] bg-white w-full">
        //                 <div className="flex justify-between items-center flex-grow shrink-0 basis-0 bg-white h-full w-full">
        //                     <div className="flex lg:w-[638px] w-full items-center gap-[12px]">
        //                         <div className="w-[32px] h-[32px] flex justify-center items-center gap-[10px] shrink-0 rounded-[10px] cursor-pointer hover:bg-gray-100">
        //                             <Paperclip />
        //                         </div>
        //                         <input
        //                             type="text"
        //                             // value={input}
        //                             // onChange={(e) => setInput(e.target.value)}
        //                             // onKeyDown={handleKeyDown}
        //                             placeholder="Message"
        //                             className="flex-grow shrink-0 balance-0 rounded-[8px] font-Nunito text-[20px] text-black font-normal focus:outline-none overflow-scroll" />
        //                     </div>
        //                     <button className="w-[44px] h-[44px] flex justify-center items-center cursor-pointer gap-[10px] rounded-[10px] hover:bg-gray-100">
        //                         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        //                             <path d="M26.0204 21.8857L15.5149 3.51944C15.3627 3.24882 15.1412 3.02357 14.8731 2.86681C14.6051 2.71006 14.3002 2.62744 13.9897 2.62744C13.6792 2.62744 13.3743 2.71006 13.1062 2.86681C12.8382 3.02357 12.6167 3.24882 12.4644 3.51944L1.97647 21.8944C1.80258 22.2046 1.7273 22.5604 1.76064 22.9144C1.79399 23.2684 1.9344 23.6039 2.16315 23.8761C2.39191 24.1483 2.69817 24.3444 3.04115 24.4382C3.38413 24.5321 3.74756 24.5192 4.08304 24.4013L14.0001 21.049L23.9171 24.3991C24.1044 24.4651 24.3015 24.4991 24.5001 24.4998C24.8057 24.4987 25.1057 24.4177 25.3703 24.2647C25.6349 24.1117 25.8547 23.8921 26.0081 23.6277C26.1614 23.3633 26.2428 23.0634 26.2442 22.7577C26.2456 22.4521 26.1669 22.1515 26.016 21.8857H26.0204ZM24.4837 22.7432L14.8751 19.4969V13.1248C14.8751 12.8927 14.7829 12.6701 14.6188 12.506C14.4547 12.3419 14.2321 12.2498 14.0001 12.2498C13.768 12.2498 13.5454 12.3419 13.3814 12.506C13.2173 12.6701 13.1251 12.8927 13.1251 13.1248V19.4969L3.51757 22.7432L3.50007 22.7498L13.9848 4.37476L24.5001 22.7498L24.4837 22.7432Z" fill="black" />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div >
        // </div>
        <div className="">
            <div className="flex flex-col py-4 items-center basis-1/4 w-full ">
                <div className="xl:w-[78.75rem] w-full flex basis-1/4">
                    <div className="chat-container h-[calc(100vh-200px)] sm:h-[calc(100vh-280px)] overflow-y-auto">
                        <div className="chat-box flex justify-center items-center flex-col gap-4 h-full">
                            <LawExplainerCard />
                        </div>
                    </div>
                </div>

                <div className="flex w-full basis-1/4 sm:py-[30px] flex-col items-center justify-center gap-[10px] bottom-0">
                    <div className="flex xl:w-[78.75rem] w-full h-[80px] py-[18px] px-[24px] justify-end flex-col items-center gap-[10px] rounded-[10px] bg-white">
                        <div className="flex justify-between items-center flex-grow h-full w-full">
                            <div className="flex lg:w-[638px] w-full items-center gap-[12px]">
                                <div className="w-[32px] h-[32px] flex justify-center items-center gap-[10px] shrink-0 rounded-[10px] cursor-pointer">
                                    <Paperclip />
                                </div>
                                <input
                                    type="text"
                                    // value={input}
                                    // onChange={(e) => setInput(e.target.value)}
                                    // onKeyDown={handleKeyDown}
                                    placeholder="Message"
                                    className="flex-grow rounded-[8px] font-Nunito text-[20px] text-black font-normal focus:outline-none overflow-scroll w-full" />
                            </div>
                            <button className="w-[44px] h-[44px] flex justify-center items-center cursor-pointer gap-[10px] rounded-[10px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M26.0204 21.8857L15.5149 3.51944C15.3627 3.24882 15.1412 3.02357 14.8731 2.86681C14.6051 2.71006 14.3002 2.62744 13.9897 2.62744C13.6792 2.62744 13.3743 2.71006 13.1062 2.86681C12.8382 3.02357 12.6167 3.24882 12.4644 3.51944L1.97647 21.8944C1.80258 22.2046 1.7273 22.5604 1.76064 22.9144C1.79399 23.2684 1.9344 23.6039 2.16315 23.8761C2.39191 24.1483 2.69817 24.3444 3.04115 24.4382C3.38413 24.5321 3.74756 24.5192 4.08304 24.4013L14.0001 21.049L23.9171 24.3991C24.1044 24.4651 24.3015 24.4991 24.5001 24.4998C24.8057 24.4987 25.1057 24.4177 25.3703 24.2647C25.6349 24.1117 25.8547 23.8921 26.0081 23.6277C26.1614 23.3633 26.2428 23.0634 26.2442 22.7577C26.2456 22.4521 26.1669 22.1515 26.016 21.8857H26.0204ZM24.4837 22.7432L14.8751 19.4969V13.1248C14.8751 12.8927 14.7829 12.6701 14.6188 12.506C14.4547 12.3419 14.2321 12.2498 14.0001 12.2498C13.768 12.2498 13.5454 12.3419 13.3814 12.506C13.2173 12.6701 13.1251 12.8927 13.1251 13.1248V19.4969L3.51757 22.7432L3.50007 22.7498L13.9848 4.37476L24.5001 22.7498L24.4837 22.7432Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}