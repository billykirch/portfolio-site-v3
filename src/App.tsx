import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProjectPage from './pages/ProjectPage'
import Misc from './pages/Misc'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/misc" element={<Misc />} />
      </Routes>
    </BrowserRouter>
  )
}
