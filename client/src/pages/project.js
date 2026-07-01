import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/Projectsdata";

export default function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        body { background: #050a1e; }
        .proj-root { min-height:100vh; background:#050a1e; color:#e8e0d0; padding:5rem 3rem 7rem; }
        .gold-line { width:50px; height:2px; background:linear-gradient(90deg,#d4af37,#f0d060); margin-bottom:1.2rem; }
        .proj-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(340px,1fr)); gap:2rem; margin-top:3rem; }
        .pcard { background:rgba(255,255,255,0.02); border:1px solid rgba(212,175,55,0.12); padding:2.2rem; position:relative; overflow:hidden; transition:all 0.3s; display:flex; flex-direction:column; }
        .pcard::before { content:''; position:absolute; top:0; left:0; width:3px; height:0; background:linear-gradient(to bottom,#d4af37,#f0d060); transition:height 0.4s; }
        .pcard:hover::before { height:100%; }
        .pcard:hover { background:rgba(212,175,55,0.04); border-color:rgba(212,175,55,0.3); transform:translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,0.3); }
        .ptag { font-family:'DM Sans',sans-serif; font-size:0.65rem; padding:3px 10px; border-radius:2px; background:rgba(212,175,55,0.08); color:#d4af37; border:1px solid rgba(212,175,55,0.2); letter-spacing:0.06em; text-transform:uppercase; }
        .pdetail-btn { display:block; margin-top:auto; padding:0.7rem 1.5rem; border:1px solid rgba(212,175,55,0.3); color:#d4af37; text-decoration:none; text-align:center; font-family:'DM Sans',sans-serif; font-size:0.75rem; letter-spacing:0.1em; text-transform:uppercase; transition:all 0.2s; }
        .pdetail-btn:hover { background:linear-gradient(135deg,#d4af37,#f0d060); color:#050a1e; border-color:transparent; }
      `}</style>

      <div className="proj-root">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>My Work</p>
          <div className="gold-line" />
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, color: '#e8e0d0', lineHeight: 1.1, marginBottom: '0.5rem' }}>
            Featured <em style={{ color: '#d4af37' }}>Projects</em>
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'rgba(200,185,155,0.6)', fontStyle: 'italic', marginBottom: '1rem' }}>A curated collection of my most impactful work</p>

          <div className="proj-grid">
            {projects.map((p, i) => (
              <div className="pcard" key={p.id}>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: 'rgba(212,175,55,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                  {String(i+1).padStart(2,'0')} / {String(projects.length).padStart(2,'0')}
                </div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#e8e0d0', marginBottom: '1rem', lineHeight: 1.3 }}>{p.title}</h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.84rem', color: 'rgba(200,185,155,0.65)', fontWeight: 300, lineHeight: 1.9, marginBottom: '1.2rem', flex: 1 }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.2rem' }}>
                  {(p.techStack || []).map(t => <span key={t} className="ptag">{t}</span>)}
                </div>
                {(p.keyFeatures || []).length > 0 && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: 'rgba(212,175,55,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>Key Features</p>
                    {p.keyFeatures.slice(0,3).map((f,i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#d4af37', flexShrink: 0, marginTop: 6 }} />
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: 'rgba(200,185,155,0.6)', fontWeight: 300, lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                )}
                <Link to={`/projects/${p.id}`} className="pdetail-btn">View Details →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
