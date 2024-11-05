const LawExplainerCard = () => {
    return(
        <div className="sm:grid grid-cols-10 items-center hidden gap-[12px]">
            <div className="flex flex-col items-start gap-[21px] rounded-[10px] bg-[#FFF] p-[24px] max-w-[13.625rem] h-[9.75rem] lg:min-h-[12rem] ml-2 col-span-2 col-start-3 overflow-hidden">
                <h1 className="flex flex-col items-start gap-[10px] font-Nunito text-lg font-normal">What is the recent changes in IT Law?</h1>
            </div>
            <div className="flex flex-col items-start gap-[21px] rounded-[10px] bg-[#FFF] p-[24px] max-w-[13.625rem] h-[9.75rem] lg:min-h-[12rem] ml-2 col-span-2 col-start-5 overflow-hidden">
                <h1 className="flex flex-col items-start gap-[10px] font-Nunito text-lg font-normal">Laws to install a mobile tower in apartment building?</h1>
            </div>
            <div className="flex flex-col items-start gap-[21px] rounded-[10px] bg-[#FFF] p-[24px] max-w-[13.625rem] h-[9.75rem] lg:min-h-[12rem] ml-2 col-span-2 col-start-7 overflow-hidden">
                <h1 className="flex flex-col items-start gap-[10px] font-Nunito text-lg font-normal">Fees to apply for telecom license?</h1>
            </div>
        </div>
    )
}

export default LawExplainerCard