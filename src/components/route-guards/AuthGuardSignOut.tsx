import { PropsWithChildren } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { AUTH_PATHS } from "../../routes/auth/index.enum";

const AuthGuardSignOut: React.FC<PropsWithChildren> = ({children}) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to={AUTH_PATHS.SIGNIN}/>;
    }
    return children || <Outlet/>
};  

export default AuthGuardSignOut;