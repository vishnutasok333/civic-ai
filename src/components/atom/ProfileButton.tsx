import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { useLogout } from "../../hooks/authHooks/useLogout";
import { useSelector } from "react-redux";


const ProfileButton = () => {


    const handleLogout = useLogout();
    const token = useSelector((state: any) => state.auth.token);
    console.log("token",token);
    // console.log("token name slice",token.name.slice(0,1));
    
    

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            {(!token.picture || token.picture === "undefined" || token.picture === "null") ?
            <div className="md:w-[36px] md:h-[36px] w-[27px] h-[27px] rounded-full border-[2px] border-[#2DA6D2] bg-gradient-to-t from-[#003] to-[#003] bg-center bg-cover bg-no-repeat flex justify-center items-center font-extrabold text-white cursor-pointer"
                 onClick={handleLogout}
                >
                {token.name?.slice(0,1)}
            </div>
             : 
             <div className="w-[36px] h-[36px] rounded-full border-[2px] border-[#2DA6D2] bg-lightgray bg-center bg-cover bg-no-repeat">
             <img
                 src={token.picture}
                 alt="1"
                 onClick={handleLogout}
                 className="w-full h-full object-cover rounded-[36px]" />
         </div>}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
                <DropdownMenuLabel>{token.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:bg-transparent">
                        <User className="mr-2 h-4 w-4 bg-transparent" />
                        <span>{token.name}</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="hover:bg-slate-100">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileButton;
