import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18n'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from './components/context/AuthContext.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <App />
    </AuthProvider>
  </QueryClientProvider>,
)
