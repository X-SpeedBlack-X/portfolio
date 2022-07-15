import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

export function Routes() {
  return (
    <BrowserRouter>
      <Nav />

      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Router>
      <Footer />
    </BrowserRouter>
  );
}
