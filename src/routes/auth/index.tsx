import RegisterPage from "../../components/Register";
import SignIn from "../../components/SignIn";
import { Suspense } from "react";
import { Route } from "react-router-dom";
import { AUTH_PATHS } from "./index.enum";


export const AUTH_ROUTES = [
    <Route path={AUTH_PATHS.SIGNIN} element={
     <Suspense fallback={<div>Loading...</div>}> <SignIn /></Suspense>
   } />,
    <Route path={AUTH_PATHS.SIGNUP} element={
     <Suspense fallback={<div>Loading...</div>}><RegisterPage /></Suspense>
    } />
];