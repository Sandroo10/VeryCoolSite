import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import MainPage from "./components/MainPage"
import Post1Page from "./components/Posts1Page"
import SignIn from "./components/SignIn";
import "./App.css"
import RegisterPage from "./components/Register";
import AboutPage from "./components/About";
import WritePage from "./components/WritePage";
import { ThemeProvider } from "./components/theme-provider";
import { supabase } from "./supabase";
import { useEffect } from "react";
import { useAuth } from "./components/context/AuthContext";
import Profile from "./components/Profile";
import AuthGuardSignIn from "./components/route-guards/AuthGuardSignIn";
import AuthGuardSignOut from "./components/route-guards/AuthGuardSignOut";

function App() {
  const {handleSetUser} = useAuth()

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        handleSetUser(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        handleSetUser(session)
      })

      return () => subscription.unsubscribe()
    }, [])
 
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/1" element={<Post1Page />} />
        <Route path="/signin" element={<AuthGuardSignIn><SignIn/></AuthGuardSignIn>} />
        <Route path="/profile" element={<AuthGuardSignOut><Profile /></AuthGuardSignOut>} />
        <Route path="/register" element={<AuthGuardSignIn><RegisterPage /></AuthGuardSignIn>} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/about" element={<AboutPage />} />
        
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
