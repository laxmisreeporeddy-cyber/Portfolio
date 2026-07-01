import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return alert('Please fill all fields');
    try {
      await emailjs.send('service_22dl72x', 'template_sqq3vq1', {
        from_name: form.name, from_email: form.email,
        reply_to: form.email, to_name: 'Laxmisree', message: form.message,
      }, 'Te5Xf_dxlJlcyVH3G');
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) { alert('Failed to send. Please try again.'); }
  };

  const LINKS = [
    { label: '+91 7416598126', href: 'tel:+917416598126', icon: '📞' },
    { label: 'laxmisreeporeddy@gmail.com', href: 'mailto:laxmisreeporeddy@gmail.com', icon: '✉' },
    { label: 'linkedin.com/in/laxmi-sree-poreddy', href: 'https://www.linkedin.com/in/laxmi-sree-poreddy-090a80397', icon: 'in' },
    { label: 'github.com/laxmisreeporeddy-cyber', href: 'https://github.com/laxmisreeporeddy-cyber', icon: '⌂' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        .con-root { min-height: 100vh; background: #050a1e; color: #e8e0d0; padding: 5rem 3rem 7rem; }
        .con-input { width:100%; background:rgba(212,175,55,0.04); border:1px solid rgba(212,175,55,0.15); border-radius:2px; color:#e8e0d0; font-family:'DM Sans',sans-serif; font-size:0.88rem; font-weight:300; padding:0.9rem 1.2rem; outline:none; resize:vertical; transition:border-color 0.2s; }
        .con-input:focus { border-color:rgba(212,175,55,0.5); }
        .con-input::placeholder { color:rgba(200,185,155,0.3); }
        .con-link { display:flex; align-items:center; gap:14px; text-decoration:none; color:rgba(200,185,155,0.6); font-size:0.85rem; font-family:'DM Sans',sans-serif; font-weight:300; padding:1rem 0; border-bottom:1px solid rgba(212,175,55,0.08); transition:color 0.2s; }
        .con-link:hover { color:#d4af37; }
        .gold-line { width:50px; height:2px; background:linear-gradient(90deg,#d4af37,#f0d060); margin-bottom:1.2rem; }
      `}</style>

      <div className="con-root">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#d4af37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Get In Touch</p>
          <div className="gold-line" />
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 900, color: '#e8e0d0', lineHeight: 1.1, marginBottom: '4rem' }}>
            Let's <em style={{ color: '#d4af37' }}>Talk</em>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            {/* Left */}
            <div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: 'rgba(232,224,208,0.7)', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Open to full-time roles, internships, and collaborative projects. If you have an interesting challenge, I'd love to hear about it.
              </p>
              <div>
                {LINKS.map(l => (
                  <a key={l.label} href={l.href} className="con-link" target="_blank" rel="noreferrer">
                    <div style={{ width: 36, height: 36, border: '1px solid rgba(212,175,55,0.2)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', flexShrink: 0, color: '#d4af37' }}>{l.icon}</div>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              {sent ? (
                <div style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 2, padding: '3rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#d4af37', marginBottom: '1rem' }}>✓</div>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#e8e0d0' }}>Message sent! I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: 'rgba(212,175,55,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>Name</label>
                      <input name="name" value={form.name} onChange={handle} placeholder="Your name" className="con-input" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: 'rgba(212,175,55,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>Email</label>
                      <input name="email" value={form.email} onChange={handle} placeholder="your@email.com" className="con-input" />
                    </div>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: 'rgba(212,175,55,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handle} rows="6" placeholder="Tell me about your project..." className="con-input" />
                  </div>
                  <button onClick={submit} style={{ width: '100%', padding: '0.9rem', background: 'linear-gradient(135deg,#d4af37,#f0d060)', color: '#050a1e', border: 'none', borderRadius: 2, fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase', transition: 'all 0.2s' }}>
                    Send Message →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}