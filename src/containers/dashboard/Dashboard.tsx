import { DashboardCard } from "../../components/atom/defaultcard/DashboardCard"

export const DashBoard = () => {
    return (
        <div className="flex flex-col items-center gap-[24px] pt-14 ">
            <div className="text-center text-[#050A30] text-6xl font-medium font-nunito md:mt-[7.5rem]">
                Build your AI model
            </div>
            <DashboardCard />
        </div>
    )

}