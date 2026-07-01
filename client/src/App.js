// eslint-disable
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home, { ThemeCtx } from './pages/home';
import Projects from './pages/project';
import About from './pages/about';
import Contact from './pages/contact';
import ProjectDetails from "./pages/ProjectDetails";
import Adminpanel from "./pages/Adminpanel";
import Certificates from "./pages/Certificates";

function Nav() {
  const loc = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/certificates', label: 'Certificates' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 3rem', height: 64,
      background: 'rgba(5,10,30,0.96)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(212,175,55,0.15)',
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 34, height: 34, background: 'linear-gradient(135deg,#d4af37,#f0d060)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1rem', color: '#050a1e', fontFamily: 'Georgia, serif' }}>P</div>
        <span style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', color: '#f0d060', fontWeight: 700, letterSpacing: '0.04em' }}>LAXMISREE</span>
      </Link>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map(l => (
          <Link key={l.path} to={l.path} style={{
            color: loc.pathname === l.path ? '#d4af37' : 'rgba(255,255,255,0.5)',
            textDecoration: 'none', fontSize: '0.8rem',
            fontFamily: 'Georgia, serif', letterSpacing: '0.08em',
            textTransform: 'uppercase',
            borderBottom: loc.pathname === l.path ? '1px solid #d4af37' : '1px solid transparent',
            paddingBottom: 2, transition: 'all 0.2s',
          }}>{l.label}</Link>
        ))}
        <a href="/Resume.pdf" download="Poreddy_Laxmisree_Resume.pdf" target="_blank" rel="noreferrer" style={{
          padding: '7px 18px', background: 'linear-gradient(135deg,#d4af37,#f0d060)',
          color: '#050a1e', borderRadius: 4, textDecoration: 'none',
          fontFamily: 'Georgia, serif', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>Resume</a>
      </div>
    </nav>
  );
}

export default function App() {
  const [dark] = useState(true);

  return (
    <ThemeCtx.Provider value={{ dark, setDark: () => {} }}>
      <Router>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #050a1e; color: #e8e0d0; }
          ::-webkit-scrollbar { width: 4px; }
          ::-webkit-scrollbar-track { background: #050a1e; }
          ::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 4px; }
        `}</style>
        <Nav />
        <div style={{ paddingTop: 64 }}>
          <Routes>
            <Route path="/"             element={<Home />} />
            <Route path="/projects"     element={<Projects />} />
            <Route path="/about"        element={<About />} />
            <Route path="/contact"      element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/Adminpanel"   element={<Adminpanel />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </div>
      </Router>
    </ThemeCtx.Provider>
  );
}
