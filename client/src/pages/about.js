// eslint-disable
import React from 'react';

const skills = [
  { cat: 'Languages',        icon: '⌨', items: ['Python', 'Java', 'C (Basics)', 'JavaScript'] },
  { cat: 'Web Technologies', icon: '🌐', items: ['HTML', 'CSS', 'React', 'Node.js', 'JSP'] },
  { cat: 'Database',         icon: '🗄', items: ['SQL', 'MySQL', 'MongoDB'] },
  { cat: 'Tools & Others',   icon: '🛠', items: ['MS Excel', 'Power BI', 'Git', 'MS PowerPoint'] },
];

const facts = [
  { label: 'Location',  value: 'Hyderabad, Telangana' },
  { label: 'Education', value: 'B.Tech IT — BRECW (81%)' },
  { label: 'Born',      value: '17 November 2006' },
  { label: 'Languages', value: 'Telugu, Hindi, English' },
  { label: 'Email',     value: 'laxmisreeporeddy@gmail.com' },
  { label: 'Phone',     value: '7416598126' },
];

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        .about-root { min-height: 100vh; background: #050a1e; color: #e8e0d0; padding: 5rem 3rem 7rem; }
        .section-divider { width:100%; height:1px; background:linear-gradient(90deg,transparent,rgba(212,175,55,0.3),transparent); margin: 3rem 0; }
        .gold-line { width: 50px; height: 2px; background: linear-gradient(90deg,#d4af37,#f0d060); margin-bottom: 1.2rem; }
        .skill-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-top: 2.5rem; }
        .skill-card { background: rgba(212,175,55,0.04); border: 1px solid rgba(212,175,55,0.12); padding: 1.8rem; position: relative; transition: all 0.3s; }
        .skill-card::before { content:''; position:absolute; top:0; left:0; width:3px; height:0; background:linear-gradient(to bottom,#d4af37,#f0d060); transition:height 0.4s; }
        .skill-card:hover::before { height:100%; }
        .skill-card:hover { background: rgba(212,175,55,0.07); border-color: rgba(212,175,55,0.25); }
        .fact-row { display: flex; padding: 0.9rem 0; border-bottom: 1px solid rgba(212,175,55,0.08); }
        .fact-row:first-child { border-top: 1px solid rgba(212,175,55,0.08); }
      `}</style>

      <div className="about-root">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Who I Am</p>
            <div className="gold-line" />
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, color: '#e8e0d0', lineHeight: 1.1 }}>
              About <em style={{ color: '#d4af37' }}>Me</em>
            </h1>
          </div>

          {/* Bio + Facts grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start', marginBottom: '4rem' }}>
            <div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: 'rgba(232,224,208,0.85)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "I believe great technology is built at the intersection of creativity and logic."
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem', color: 'rgba(200,185,155,0.7)', fontWeight: 300, lineHeight: 2, marginBottom: '1.2rem' }}>
                I'm Poreddy Laxmisree, a B.Tech Information Technology student at Bhoj Reddy Engineering College for Women, Hyderabad. With a CGPA of 9.0, I combine academic excellence with hands-on technical experience.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem', color: 'rgba(200,185,155,0.7)', fontWeight: 300, lineHeight: 2, marginBottom: '2rem' }}>
                My interests span full-stack development, data analytics, and artificial intelligence. I enjoy turning complex problems into clean, impactful solutions that make a difference in people's lives.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="/Resume.pdf" download="Poreddy_Laxmisree_Resume.pdf" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 2rem', background: 'linear-gradient(135deg,#d4af37,#f0d060)', color: '#050a1e', borderRadius: 2, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Download CV</a>
                <a href="https://www.linkedin.com/in/laxmisree-prasanna-359047285" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 2rem', background: 'transparent', color: '#d4af37', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 2, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>LinkedIn</a>
              </div>
            </div>

            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Quick Facts</p>
              {facts.map(f => (
                <div key={f.label} className="fact-row">
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: 'rgba(212,175,55,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', width: 120, flexShrink: 0 }}>{f.label}</span>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#e8e0d0', fontWeight: 400 }}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider" />

          {/* Skills */}
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Technical Expertise</p>
            <div className="gold-line" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: '#e8e0d0', marginBottom: '0.5rem' }}>Skills & <em style={{ color: '#d4af37' }}>Tools</em></h2>
            <div className="skill-grid">
              {skills.map(s => (
                <div key={s.cat} className="skill-card">
                  <div style={{ fontSize: '1.6rem', marginBottom: '1rem', opacity: 0.8 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', fontWeight: 700, color: '#d4af37', marginBottom: '1rem', letterSpacing: '0.02em' }}>{s.cat}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {s.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#d4af37', flexShrink: 0 }} />
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: 'rgba(200,185,155,0.75)', fontWeight: 300 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
