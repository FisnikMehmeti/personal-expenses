import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/shared/Sidebar"
import Header from "./components/shared/Header"
import Dashboard from "./pages/dashboard/Dashboard"
import LandingPage from "./pages/LandingPage"


function App() {
  return(
    <BrowserRouter>
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <Routes>
              <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
)
}

export default App
