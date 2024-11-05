import { ReactNotifications } from "react-notifications-component"
import { Login } from "../../components/landingPage/Login"
// import 'react-notifications-component/dist/theme.css'


export const LandingPage = () => {
    return (
        <div className="flex min-h-screen bg-custom-gradient">
        <ReactNotifications/>

            <div className="lg:flex flex-col justify-center items-center xl:w-[1071px] min-h-full px-[60px] py-[80px] hidden">
                <div className="flex flex-col gap-[64px] items-center justify-center flex-grow shrink-0 basis-0 self-stretch">
                    <div className="flex flex-col w-[651px] h-[238px] gap-[24px] items-start">
                    <h1 className="text-[#FFF] font-Nunito text-[60px] font-extrabold self-stretch">Welcome to Civic AI</h1>
                    <p className="text-[#FFF] font-Nunito text-[24px] font-normal w-[625px]">
                    Empowering smarter cities and communities through AI-driven solutions. Sign in to manage your city’s data, streamline operations, and create meaningful impact with our intelligent platform.                    </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between items-start flex-grow shrink-0 basis-0 self-stretch bg-violet-50 text-black lg:w-[849px] min-h-full">
                <Login />
            </div>
        </div>)
}