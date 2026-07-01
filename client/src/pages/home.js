// eslint-disable
import React, { useEffect, useRef, useState, createContext } from 'react';
import { Link } from 'react-router-dom';

export const ThemeCtx = createContext();

const ROLES = ['Full-Stack Developer', 'Data Analytics Enthusiast', 'AI & ML Explorer', 'Problem Solver'];
function useTypewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const target = ROLES[roleIdx];
    let t;
    if (!deleting && text.length < target.length)       t = setTimeout(() => setText(target.slice(0, text.length + 1)), 70);
    else if (!deleting && text.length === target.length) t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && text.length > 0)                t = setTimeout(() => setText(text.slice(0, -1)), 40);
    else { setDeleting(false); setRoleIdx((roleIdx + 1) % ROLES.length); }
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);
  return text;
}

function SkillBar({ name, pct, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setWidth(pct); }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);
  return (
    <div ref={ref} style={{ marginBottom: '1.2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#c8b89a', fontWeight: 300 }}>{name}</span>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#d4af37', fontWeight: 500 }}>{pct}%</span>
      </div>
      <div style={{ height: 3, borderRadius: 999, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <div style={{ height: '100%', borderRadius: 999, background: `linear-gradient(90deg, #d4af37, ${color})`, width: `${width}%`, transition: 'width 1.4s cubic-bezier(0.4,0,0.2,1)' }} />
      </div>
    </div>
  );
}

export default function Home() {
  const role = useTypewriter();
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 80); }, []);

  const fade = (delay = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const PROJECTS = [
    { title: 'Women Safe Route System', desc: 'Smart safety-focused route recommendation using location intelligence and emergency alerts.', tags: ['React', 'Node.js', 'MongoDB'], emoji: '🛡️' },
    { title: 'Ultrasonic Blind Assistance', desc: 'Obstacle detection system using ultrasonic sensors to assist visually impaired individuals.', tags: ['Arduino', 'Embedded Systems', 'Sensors'], emoji: '👁️' },
    { title: 'Campus Event Portal', desc: 'College event management portal for announcements, registrations and student engagement.', tags: ['React', 'Node.js', 'SQL'], emoji: '🎓' },
  ];

  const SKILLS = [
    { name: 'Python', pct: 82, color: '#f0d060' },
    { name: 'React.js', pct: 78, color: '#61dafb' },
    { name: 'Data Analytics', pct: 85, color: '#d4af37' },
    { name: 'AI / ML Fundamentals', pct: 80, color: '#c8b89a' },
    { name: 'Java', pct: 72, color: '#f0d060' },
    { name: 'SQL / MySQL', pct: 75, color: '#d4af37' },
    { name: 'Node.js / Express', pct: 70, color: '#84cc16' },
    { name: 'Git & GitHub', pct: 80, color: '#f05032' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(212,175,55,0.4)} 60%{box-shadow:0 0 0 8px rgba(212,175,55,0)} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        .gold-line { width: 60px; height: 2px; background: linear-gradient(90deg,#d4af37,#f0d060); margin-bottom: 1.5rem; }
        .tag-pill { font-family:'DM Sans',sans-serif; font-size:0.68rem; padding:3px 12px; border-radius:2px; background:rgba(212,175,55,0.08); color:#d4af37; border:1px solid rgba(212,175,55,0.2); letter-spacing:0.04em; text-transform:uppercase; }
        .proj-card { background:rgba(255,255,255,0.02); border:1px solid rgba(212,175,55,0.12); border-radius:0; padding:2rem; transition:all 0.3s; position:relative; overflow:hidden; }
        .proj-card::before { content:''; position:absolute; top:0; left:0; width:3px; height:0; background:linear-gradient(to bottom,#d4af37,#f0d060); transition:height 0.4s ease; }
        .proj-card:hover::before { height:100%; }
        .proj-card:hover { background:rgba(212,175,55,0.04); border-color:rgba(212,175,55,0.3); transform:translateY(-4px); }
        .section-divider { width:100%; height:1px; background:linear-gradient(90deg,transparent,rgba(212,175,55,0.3),transparent); margin:0; }
      `}</style>

      <div style={{ background: '#050a1e', color: '#e8e0d0', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '0 3rem' }}>
          {/* Background texture */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(10,30,80,0.8) 0%, transparent 50%)', pointerEvents: 'none' }} />
          {/* Grid lines decoration */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
            {/* LEFT */}
            <div>
              <div style={{ ...fade(0), display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '2rem', fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#d4af37', animation: 'pulse 2s ease-in-out infinite', display: 'block' }} />
                Open to Opportunities · Hyderabad, India
              </div>

              <div style={{ ...fade(0.1), fontFamily: 'Playfair Display, serif', fontSize: 'clamp(3rem,7vw,5.5rem)', fontWeight: 900, lineHeight: 1.0, color: '#e8e0d0', marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>
                Poreddy
              </div>
              <div style={{ ...fade(0.15), fontFamily: 'Playfair Display, serif', fontSize: 'clamp(3rem,7vw,5.5rem)', fontWeight: 900, lineHeight: 1.0, marginBottom: '1.5rem', background: 'linear-gradient(135deg,#d4af37 0%,#f0d060 50%,#d4af37 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'shimmer 4s linear infinite' }}>
                Laxmisree
              </div>

              <div style={{ ...fade(0.2), display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.8rem' }}>
                <div style={{ width: 40, height: 1, background: '#d4af37', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.15rem', color: 'rgba(232,224,208,0.7)', fontStyle: 'italic', minWidth: 260 }}>
                  {role}<span style={{ display: 'inline-block', width: 2, height: '0.9em', background: '#d4af37', marginLeft: 3, verticalAlign: 'middle', animation: 'blink 0.8s step-end infinite' }} />
                </span>
              </div>

              <p style={{ ...fade(0.3), fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', color: 'rgba(200,185,155,0.75)', fontWeight: 300, maxWidth: 480, lineHeight: 2, marginBottom: '2.5rem' }}>
                B.Tech IT student at BRECW with a passion for building intelligent, data-driven applications. Blending analytical thinking with elegant engineering to create meaningful digital solutions.
              </p>

              <div style={{ ...fade(0.4), display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <Link to="/projects" style={{ padding: '0.85rem 2.2rem', background: 'linear-gradient(135deg,#d4af37,#f0d060)', color: '#050a1e', borderRadius: 2, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.3s' }}>View Projects</Link>
                <Link to="/contact" style={{ padding: '0.85rem 2.2rem', background: 'transparent', color: '#d4af37', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 2, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.3s' }}>Get In Touch</Link>
              </div>

              <div style={{ ...fade(0.5), display: 'flex', gap: '2.5rem' }}>
                {[['3+', 'Projects'], ['5+', 'Certifications'], ['81%', 'CGPA (B.Tech)']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: '#d4af37', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'rgba(200,185,155,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — profile image */}
            <div style={{ ...fade(0.3), position: 'relative' }}>
              <div style={{ position: 'absolute', inset: -2, background: 'linear-gradient(135deg,#d4af37,transparent,#d4af37)', borderRadius: 4, zIndex: -1 }} />
              <div style={{ background: '#0c1535', borderRadius: 2, overflow: 'hidden', aspectRatio: '3/4', border: '1px solid rgba(212,175,55,0.25)' }}>
                <img src="/profile1.png" alt="Poreddy Laxmisree" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:6rem;">👩‍💻</div>'; }} />
              </div>
              {/* decorative corner */}
              <div style={{ position: 'absolute', bottom: -12, right: -12, width: 80, height: 80, border: '2px solid rgba(212,175,55,0.3)', borderRadius: 2, zIndex: -1 }} />
              <div style={{ position: 'absolute', top: -12, left: -12, width: 80, height: 80, border: '2px solid rgba(212,175,55,0.15)', borderRadius: 2, zIndex: -1 }} />
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, animation: 'float 2.5s ease-in-out infinite' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', color: 'rgba(212,175,55,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>scroll</span>
            <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,rgba(212,175,55,0.5),transparent)' }} />
          </div>
        </div>

        <div className="section-divider" />

        {/* ── PROJECTS SECTION ── */}
        <div style={{ padding: '6rem 3rem', background: '#07112a' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '4rem', alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: '5rem' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Selected Work</p>
                <div className="gold-line" />
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', fontWeight: 700, color: '#e8e0d0', lineHeight: 1.15, marginBottom: '1.5rem' }}>Featured<br /><em style={{ color: '#d4af37' }}>Projects</em></h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(200,185,155,0.6)', lineHeight: 1.9, fontWeight: 300, marginBottom: '2rem' }}>A collection of projects that reflect my passion for building real-world solutions.</p>
                <Link to="/projects" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: '#d4af37', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(212,175,55,0.4)', paddingBottom: 2 }}>View All Projects →</Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {PROJECTS.map((p, i) => (
                  <div className="proj-card" key={i}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                      <div style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0, opacity: 0.8 }}>{p.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: 'rgba(212,175,55,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Project {String(i+1).padStart(2,'0')}</div>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#e8e0d0', marginBottom: '0.7rem' }}>{p.title}</h3>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.84rem', color: 'rgba(200,185,155,0.65)', fontWeight: 300, lineHeight: 1.8, marginBottom: '1rem' }}>{p.desc}</p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        {/* ── SKILLS SECTION ── */}
        <div style={{ padding: '6rem 3rem', background: '#050a1e' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Expertise</p>
              <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg,#d4af37,#f0d060)', margin: '0 auto 1.5rem' }} />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', fontWeight: 700, color: '#e8e0d0', lineHeight: 1.2 }}>Skills & <em style={{ color: '#d4af37' }}>Expertise</em></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
              <div>
                {SKILLS.slice(0,4).map(s => <SkillBar key={s.name} {...s} />)}
              </div>
              <div>
                {SKILLS.slice(4).map(s => <SkillBar key={s.name} {...s} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" />

        {/* ── CTA SECTION ── */}
        <div style={{ padding: '6rem 3rem', background: '#07112a', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Let's Connect</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 700, color: '#e8e0d0', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Interested in working<br /><em style={{ color: '#d4af37' }}>together?</em>
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', color: 'rgba(200,185,155,0.65)', fontWeight: 300, lineHeight: 1.9, marginBottom: '2.5rem' }}>
              I'm currently open to internships, full-time roles, and freelance opportunities. Let's build something meaningful.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ padding: '0.9rem 2.5rem', background: 'linear-gradient(135deg,#d4af37,#f0d060)', color: '#050a1e', borderRadius: 2, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Get In Touch</Link>
              <a href="https://www.linkedin.com/in/laxmi-sree-poreddy-090a80397" target="_blank" rel="noreferrer" style={{ padding: '0.9rem 2.5rem', background: 'transparent', color: '#d4af37', border: '1px solid rgba(212,175,55,0.4)', borderRadius: 2, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>LinkedIn Profile</a>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div style={{ padding: '2rem 3rem', borderTop: '1px solid rgba(212,175,55,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', color: 'rgba(212,175,55,0.5)' }}>© 2026 Poreddy Laxmisree. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['GitHub','https://github.com/laxmisreeporeddy-cyber'],['LinkedIn','https://www.linkedin.com/in/laxmi-sree-poreddy-090a80397'],['Email','mailto:laxmisreeporeddy@gmail.com']].map(([l,h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'rgba(212,175,55,0.4)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}>{l}</a>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}