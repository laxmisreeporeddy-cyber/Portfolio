import React, { useState } from 'react';

const certs = [
  { id:1, title:'Data Analytics Job Simulation', issuer:'Deloitte Australia × Forage', duration:'Job Simulation', year:'2026', description:'Successfully completed the Deloitte Data Analytics Job Simulation on Forage, working on practical tasks in Data Analysis and Forensic Technology.', image:'/certs/deloitte.png', color:'#42f578' },
  { id:2, title:'Artificial Intelligence Fundamentals', issuer:'IBM SkillsBuild', duration:'Self-Paced Course', year:'2025', description:'Earned IBM certification in AI Fundamentals — awarded to Poreddy Laxmisree — covering AI, machine learning, deep learning, and neural networks.', image:'/certs/AI.jpeg', color:'#d4af37' },
  { id:3, title:'Basics of Python', issuer:'Infosys Springboard', duration:'Self-Paced Course', year:'2026', description:'Completed the Infosys Springboard certified course on Basics of Python covering variables, data types, loops, functions and file handling.', image:'/certs/python_basics.png', color:'#3776ab' },
  { id:4, title:'Python Programming - 01', issuer:'Infosys Springboard', duration:'Self-Paced Course', year:'2026', description:'Completed Python Programming-01 on Infosys Springboard, deepening Python skills with OOP concepts and practical coding exercises.', image:'/certs/python_prog1.jpeg', color:'#f0d060' },
  { id:5, title:'JIJNASA Tech Event — BRECW', issuer:'Bhoj Reddy Engineering College for Women', duration:'Technical Event', year:'2023', description:'Participated in JIJNASA inter-college tech fest. Presented a poster on Cyber Security and participated in the Blind Coding challenge.', image:'/certs/jijnasa.jpeg', color:'#c8b89a' },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing:border-box; }
        .cert-root { min-height:100vh; background:#050a1e; color:#e8e0d0; padding:5rem 3rem 7rem; }
        .gold-line { width:50px; height:2px; background:linear-gradient(90deg,#d4af37,#f0d060); margin-bottom:1.2rem; }
        .cert-timeline { position:relative; margin-top:3rem; }
        .cert-timeline::before { content:''; position:absolute; left:16px; top:0; bottom:0; width:1px; background:linear-gradient(to bottom,transparent,rgba(212,175,55,0.3) 10%,rgba(212,175,55,0.15) 90%,transparent); }
        .cert-row { display:grid; grid-template-columns:32px 1fr; gap:0 2rem; margin-bottom:2.5rem; }
        .cert-dot { width:10px; height:10px; border-radius:50%; border:2px solid #d4af37; background:#050a1e; flex-shrink:0; margin-top:8px; box-shadow:0 0 12px rgba(212,175,55,0.4); }
        .cert-card { background:rgba(212,175,55,0.03); border:1px solid rgba(212,175,55,0.1); display:grid; grid-template-columns:260px 1fr; overflow:hidden; transition:all 0.3s; position:relative; }
        .cert-card::before { content:''; position:absolute; top:0; left:0; width:0; height:3px; background:linear-gradient(90deg,#d4af37,#f0d060); transition:width 0.4s; }
        .cert-card:hover::before { width:100%; }
        .cert-card:hover { border-color:rgba(212,175,55,0.3); transform:translateX(6px); }
        .cert-img-box { position:relative; background:rgba(255,255,255,0.03); border-right:1px solid rgba(212,175,55,0.1); min-height:190px; overflow:hidden; cursor:pointer; }
        .cert-img-box::after { content:'🔍 View'; position:absolute; inset:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; color:#d4af37; font-size:0.8rem; letter-spacing:0.1em; font-family:'DM Sans',sans-serif; opacity:0; transition:opacity 0.3s; }
        .cert-img-box:hover::after { opacity:1; }
        .cert-img-box img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.4s; }
        .cert-card:hover .cert-img-box img { transform:scale(1.04); }
        .cert-info { padding:1.8rem 2rem; display:flex; flex-direction:column; justify-content:center; gap:0.6rem; }
        .lb-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.94); z-index:999; display:flex; align-items:center; justify-content:center; padding:2rem; }
        .lb-box { position:relative; max-width:860px; width:100%; background:#07112a; border:1px solid rgba(212,175,55,0.2); overflow:hidden; }
        .lb-img { width:100%; max-height:75vh; object-fit:contain; display:block; }
        .lb-footer { padding:1.2rem 1.8rem; border-top:1px solid rgba(212,175,55,0.1); }
        .lb-close { position:absolute; top:14px; right:14px; width:36px; height:36px; background:rgba(212,175,55,0.1); border:1px solid rgba(212,175,55,0.2); color:#d4af37; font-size:1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.2s; }
        .lb-close:hover { background:rgba(212,175,55,0.25); }
        @media(max-width:720px) { .cert-card{grid-template-columns:1fr;} .cert-img-box{min-height:160px;border-right:none;border-bottom:1px solid rgba(212,175,55,0.1);} }
      `}</style>

      <div className="cert-root">
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>My Achievements</p>
          <div className="gold-line" />
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, color: '#e8e0d0', lineHeight: 1.1, marginBottom: '0.5rem' }}>
            Certifi<em style={{ color: '#d4af37' }}>cates</em>
          </h1>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: 'rgba(200,185,155,0.55)', fontStyle: 'italic', marginBottom: '0.5rem' }}>{certs.length} certifications earned through courses, internships & events</p>

          <div className="cert-timeline">
            {certs.map(c => (
              <div className="cert-row" key={c.id}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 8 }}>
                  <div className="cert-dot" style={{ borderColor: c.color, boxShadow: `0 0 12px ${c.color}55` }} />
                </div>
                <div className="cert-card">
                  <div className="cert-img-box" onClick={() => setSelected(c)}>
                    <img src={c.image} alt={c.title} onError={(e) => { e.target.style.display='none'; e.target.parentNode.innerHTML=`<div style="display:flex;align-items:center;justify-content:center;height:100%;min-height:190px;font-size:3rem;opacity:0.3;">🏅</div>`; }} />
                  </div>
                  <div className="cert-info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 10px', color: c.color, background: `${c.color}15`, border: `1px solid ${c.color}30` }}>{c.year}</span>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.68rem', color: 'rgba(212,175,55,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.duration}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontWeight: 700, color: '#e8e0d0', lineHeight: 1.3 }}>{c.title}</h3>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.9rem', color: 'rgba(212,175,55,0.65)', fontStyle: 'italic' }}>Issued by {c.issuer}</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: 'rgba(200,185,155,0.55)', fontWeight: 300, lineHeight: 1.8 }}>{c.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div className="lb-overlay" onClick={() => setSelected(null)}>
          <div className="lb-box" onClick={e => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setSelected(null)}>✕</button>
            <img className="lb-img" src={selected.image} alt={selected.title} />
            <div className="lb-footer">
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, color: '#e8e0d0', marginBottom: 4 }}>{selected.title}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: 'rgba(212,175,55,0.6)' }}>Issued by {selected.issuer}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
