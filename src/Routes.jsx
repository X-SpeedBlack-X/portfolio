import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { About } from './pages/About'
import { Home } from './pages/Home'

export function Routes() {
  return (
    <BrowserRouter>
      <Nav />
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Router>
    </BrowserRouter>
  )
}
