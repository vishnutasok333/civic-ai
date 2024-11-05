// hooks/useLogout.ts

import { useNavigate } from "react-router-dom";
//import { useAppDispatch } from "@/hooks/storeHooks/storeHooks";
import { clearDB } from "../../services/keycloackconfig.util"; 
import { useAuth } from "../../containers/auth/authClient";
import Notification from "../../components/atom/Notification";

export const useLogout = () => {
    const navigate = useNavigate();
    //const dispatch = useAppDispatch();
    const auth = useAuth();

    const handleLogout = () => {
        try{
        auth?.signOut(() => {
            clearDB();
            navigate(`/`, { replace: false });
        });
        Notification("Succesfull","You have been Successfully Logged-out","success")
    } catch {
        Notification("Failed","Failed to Logout","info")
    }
    };

    return handleLogout;
};
