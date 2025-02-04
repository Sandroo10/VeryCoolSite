import AboutPage from "../../components/About";
import MainPage from "../../components/MainPage";
import PostPage from "../../components/Posts1Page";
import Profile from "../../components/Profile";
import AuthGuardSignOut from "../../components/route-guards/AuthGuardSignOut";
import WritePage from "../../components/WritePage";
import { Suspense } from "react";
import { Route } from "react-router-dom";
import { DASHBOARD_PATHS } from "./index.enum";



export const DASHBOARD_ROUTES = [
  <Route
    path={DASHBOARD_PATHS.ABOUT}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
      </Suspense>
    }
  />,
  <Route
    path={DASHBOARD_PATHS.WRITE}
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <WritePage />
      </Suspense>
    }
  />,

  <Route
    path={DASHBOARD_PATHS.PROFILE}
    element={
        <AuthGuardSignOut>
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
      </AuthGuardSignOut>
    }
  />,
  <Route index element={
    <Suspense fallback={<div>Loading...</div>}>
  <MainPage />
 </Suspense>} />,
     <Route path="posts/:id" element={<Suspense fallback={<div>Loading...</div>}><PostPage /></Suspense>} />
];