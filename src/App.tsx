import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Index'
import { Schedule } from './pages/Schedule'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
