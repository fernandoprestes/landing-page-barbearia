import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Index'
import { Schedule } from './pages/Schedule'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
