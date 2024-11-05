import { useLocation, useNavigate } from 'react-router-dom';
import avatarmodel from '../../assets/icons/Avatar-Model.png'
import avatarmodel1 from '../../assets/icons/Avatar-Model 1.png'
import avatarmodel2 from '../../assets/icons/Avatar-Model2.png'
import { Settings } from 'lucide-react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import SidebarButton from '../atom/button/SidebarButton';
import SearchSvg from '../atom/svg/Searchsvg';
import Translatesvg from '../atom/svg/Translatesvg';
import Interpretationsvg from '../atom/svg/Interpretationsvg';
import Chatsvg from '../atom/svg/Chatsvg';
import Modelssvg from '../atom/svg/Modelssvg';
// import { Location } from 'react-router-dom';

export const DashBoardSideBar = () => {

    const navigation = useLocation()
    console.log("navigation",navigation);
    
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    const handleSearch = () => {
        navigate('/search');
    };

    const handlerefresh = () => {
        navigate('/')
    }

    const handlelawExplainer = () => {
        navigate('/lawexplainer');
    };

    const handleTranslate = () => {
        navigate('/translate');
    };


    return (
        <div className="flex flex-col bg-gradient-to-t from-[#003] to-[#003] pt-[24px] pr-[12px] pb-[12px] pl-[12px] gap-[24px] shrink-0 min-h-screen">

            <div className="flex md:flex-row flex-col md:items-center gap-[12px] md:h-[44px] shrink-0 self-stretch">
                <div className="h-[33px] flex-grow shrink-0 basis-0 md:flex hidden"><h1 className="text-white font-bold text-[24px] font-Nunito">Civic AI</h1></div>
                <div className="bg-[rgba(255,255,255,0.12)] group hover:bg-[#E5E5FF] flex items-center justify-center gap-[10px] w-[44px] h-[44px] rounded-[50px] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path className='fill-white group-hover:fill-black' d="M20.25 3.9375H3.75C3.4019 3.9375 3.06806 4.07578 2.82192 4.32192C2.57578 4.56806 2.4375 4.9019 2.4375 5.25V18.75C2.4375 19.0981 2.57578 19.4319 2.82192 19.6781C3.06806 19.9242 3.4019 20.0625 3.75 20.0625H20.25C20.5981 20.0625 20.9319 19.9242 21.1781 19.6781C21.4242 19.4319 21.5625 19.0981 21.5625 18.75V5.25C21.5625 4.9019 21.4242 4.56806 21.1781 4.32192C20.9319 4.07578 20.5981 3.9375 20.25 3.9375ZM3.5625 18.75V5.25C3.5625 5.20027 3.58225 5.15258 3.61742 5.11742C3.65258 5.08225 3.70027 5.0625 3.75 5.0625H7.6875V18.9375H3.75C3.70027 18.9375 3.65258 18.9177 3.61742 18.8826C3.58225 18.8474 3.5625 18.7997 3.5625 18.75ZM20.4375 18.75C20.4375 18.7997 20.4177 18.8474 20.3826 18.8826C20.3474 18.9177 20.2997 18.9375 20.25 18.9375H8.8125V5.0625H20.25C20.2997 5.0625 20.3474 5.08225 20.3826 5.11742C20.4177 5.15258 20.4375 5.20027 20.4375 5.25V18.75Z" fill="white" />
                    </svg>
                </div>
                <div className="w-[44px] h-[44px] flex items-center justify-center gap-[10px] rounded-[50px]  group bg-[rgba(255,255,255,0.12)] hover:bg-[#E5E5FF] cursor-pointer" onClick={handlerefresh}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path className='fill-white group-hover:fill-black' d="M17.8313 4.66876L15.3313 2.16876C15.2434 2.08098 15.1242 2.03168 15 2.03168C14.8758 2.03168 14.7566 2.08098 14.6687 2.16876L7.16875 9.66877C7.08082 9.75659 7.03136 9.87574 7.03125 10V12.5C7.03125 12.6243 7.08064 12.7436 7.16854 12.8315C7.25645 12.9194 7.37568 12.9688 7.5 12.9688H10C10.1243 12.9687 10.2434 12.9192 10.3313 12.8313L17.8313 5.33126C17.919 5.24337 17.9683 5.12423 17.9683 5.00001C17.9683 4.8758 17.919 4.75666 17.8313 4.66876ZM9.80547 12.0313H7.96875V10.1945L13.125 5.0383L14.9617 6.87501L9.80547 12.0313ZM15.625 6.21173L13.7883 4.37501L15 3.1633L16.8367 5.00001L15.625 6.21173ZM17.3438 10V16.25C17.3438 16.5401 17.2285 16.8183 17.0234 17.0234C16.8183 17.2285 16.5401 17.3438 16.25 17.3438H3.75C3.45992 17.3438 3.18172 17.2285 2.9766 17.0234C2.77148 16.8183 2.65625 16.5401 2.65625 16.25V3.75001C2.65625 3.45993 2.77148 3.18173 2.9766 2.97662C3.18172 
                                  2.7715 3.45992 2.65626 3.75 2.65626H10C10.1243 2.65626 10.2435 2.70565 10.3315 2.79356C10.4194 2.88147 10.4688 3.00069 10.4688 3.12501C10.4688 3.24934 10.4194 3.36856 10.3315 3.45647C10.2435 3.54438 10.1243 3.59376 10 3.59376H3.75C3.70856 3.59376 3.66882 3.61023 3.63951 3.63953C3.61021 3.66883 3.59375 3.70857 3.59375 3.75001V16.25C3.59375 16.2915 3.61021 16.3312 3.63951 16.3605C3.66882 16.3898 3.70856 16.4063 3.75 16.4063H16.25C16.2914 16.4063 16.3312 16.3898 16.3605 16.3605C16.3898 16.3312 16.4062 16.2915 16.4062 16.25V10C16.4062 9.87569 16.4556 9.75647 16.5435 9.66856C16.6315 9.58065 16.7507 9.53126 16.875 9.53126C16.9993 9.53126 17.1185 9.58065 17.2065 9.66856C17.2944 9.75647 17.3438 9.87569 17.3438 10Z" fill="black" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col items-start gap-[6px] lg:w-[294px] self-stretch">
                <SidebarButton handleClick={handleSearch}>
                    <div><SearchSvg /></div>
                    <h1 className='md:flex hidden'>Search</h1>
                </SidebarButton>
                <SidebarButton handleClick={handleTranslate}>
                    <div><Translatesvg /></div>
                    <h1 className='md:flex hidden'>Translate</h1>
                </SidebarButton>
                <SidebarButton>
                    <div><Interpretationsvg /></div>
                    <h1 className='md:flex hidden'>Interpretation</h1>
                </SidebarButton>
                <SidebarButton>
                    <div><Chatsvg /></div>
                    <h1 className='md:flex hidden'>Chat</h1>
                </SidebarButton>
                <SidebarButton handleClick={() => setShowDropdown(prev => !prev)}>
                    <div className='flex items-center gap-[10px] flex-grow shrink-0 basis-0'>
                        <Modelssvg />
                        <h1 className='md:flex hidden'>Models</h1>
                    </div>
                    {showDropdown ? <KeyboardArrowUpIcon className='shrink-0 text-white group-hover:text-black md:flex hidden' /> : <KeyboardArrowDownIcon className='shrink-0 text-white group-hover:text-black md:flex hidden' />}
                </SidebarButton>

                {showDropdown && <div className='flex flex-col items-start transition ease-in-out'>
                    <button className='flex h-[50px] py-0 pr-[12px] pl-[24px] items-center gap-[10px] self-stretch rounded-[10px] hover:bg-[#E5E5FF] group md:w-[294px]'
                            onClick={handlelawExplainer}>
                        <div className='flex w-[24px] h-[24px] justify-center items-center gap-[10px] rounded-[50px] shrink-0'>
                            <img src={avatarmodel} className='shrink-0' />
                        </div>
                        <h1 className='text-[#FFF] font-Nunito text-[20px] font-normal group-hover:text-black md:flex hidden'>IT law Explainer</h1>
                    </button>
                    <button className='flex h-[50px] py-0 pr-[12px] pl-[24px] items-center gap-[10px] self-stretch rounded-[10px] hover:bg-[#E5E5FF] group md:w-[294px]'>
                        <div className='flex w-[24px] h-[24px] justify-center items-center gap-[10px] rounded-[50px] shrink-0'>
                            <img src={avatarmodel1} className='shrink-0' />
                        </div>
                        <h1 className='text-[#FFF] font-Nunito text-[20px] font-normal group-hover:text-black md:flex hidden'>Education Policies</h1>
                    </button>
                    <button className='flex h-[50px] py-0 pr-[12px] pl-[24px] items-center gap-[10px] self-stretch rounded-[10px] hover:bg-[#E5E5FF] group md:w-[294px]'>
                        <div className='flex w-[24px] h-[24px] justify-center items-center gap-[10px] rounded-[50px] shrink-0'>
                            <img src={avatarmodel2} className='shrink-0' />
                        </div>
                        <h1 className='text-[#FFF] font-Nunito text-[19px] font-normal group-hover:text-black md:flex hidden'>Tender Application Rules</h1>
                    </button>
                </div>}

                <SidebarButton>
                    <Settings />
                    <div className='md:flex hidden'>Settings</div>
                </SidebarButton>
            </div>
        </div>
    )

}