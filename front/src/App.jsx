
import { BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './layout/Layout'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { ThemeProvider } from 'next-themes'
import {QueryClient, QueryClientProvider} from 'react-query';
import History from './pages/History'
function App() {
  const queryClient = new QueryClient();
  return (
    <>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/" element={<Layout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/history" element={<History/>}/>

      </Route>

    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
