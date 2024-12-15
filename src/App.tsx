import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Post1Page from "./components/Posts1Page";
import SignIn from "./components/SignIn";
import RegisterPage from "./components/Register";
import AboutPage from "./components/About";
import WritePage from "./components/WritePage";
import Profile from "./components/Profile";
import AuthGuardSignOut from "./components/route-guards/AuthGuardSignOut";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/theme-provider";
import { supabase } from "./supabase";
import { useEffect } from "react";
import { useAuth } from "./components/context/AuthContext";
import "./App.css";

function App() {
  const { handleSetUser } = useAuth();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSetUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSetUser(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="posts/:id" element={<Post1Page />} />
            <Route path="signin" element={<SignIn />} />
            <Route
              path="profile"
              element={
                <AuthGuardSignOut>
                  <Profile />
                </AuthGuardSignOut>
              }
            />
            <Route path="register" element={<RegisterPage />} />
            <Route path="write" element={<WritePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
