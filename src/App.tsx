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

const App: React.FC = () => {
 
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/posts/1" element={<Post1Page />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/about" element={<AboutPage />} />
        
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
