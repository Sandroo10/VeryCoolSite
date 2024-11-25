import { PropsWithChildren } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuardSignOut: React.FC<PropsWithChildren> = ({children}) => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/login"/>;
    }
    return children || <Outlet/>
};  

export default AuthGuardSignOut;