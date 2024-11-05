import { ReactNode } from "react";

interface SidebarButtonProps {
    handleClick?: () => void;
    children?: ReactNode;
    backtrue?:boolean
  }

  const SidebarButton: React.FC<SidebarButtonProps> = ({handleClick, children ,backtrue}) => {    
    return(<button className={`hover:bg-[#E5E5FF] ${backtrue?"bg-[#E5E5FF] text-black":""} group rounded-[10px] hover:text-black flex h-[60px] py-0 px-[12px] items-center gap-[10px] self-stretch rounded-10px text-[#FFFFFF] text-[20px] font-normal font-Nunito`}
        onClick={handleClick}>
        {children}
    </button>)
}

export default SidebarButton