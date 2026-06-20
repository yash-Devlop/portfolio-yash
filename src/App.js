import React from 'react';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const roles = ["Software Developer.", "Backend Engineer.", "Full-Stack Developer.", "Python Developer.", "Problem Solver."];
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const speed = deleting ? 40 : 90;
    const timer = setTimeout(() => {
      if (!deleting && charIdx < roles[roleIdx].length) {
        setDisplayed(prev => prev + roles[roleIdx][charIdx]);
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === roles[roleIdx].length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIdx > 0) {
        setDisplayed(prev => prev.slice(0, -1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setRoleIdx(r => (r + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const form = useRef();
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const service_id = process.env.REACT_APP_EMAIL_JS_SERVICE_ID
  const template_id = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID
  const api_key = process.env.REACT_APP_EMAIL_JS_API_KEY

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)
    emailjs.sendForm(
      service_id,
      template_id,
      form.current, {
      publicKey: api_key,
    }
    ).then(() => {
      setSent(true)
      setSending(false)
      form.current.reset()
    }).catch(() => {
      setError(true)
      setSending(false)
    })
  }

  const skills = [
    { name: "Python", icon: "🐍", level: 90 },
    { name: "FastAPI", icon: "⚡", level: 85 },
    { name: "Django", icon: "🎸", level: 80 },
    { name: "React.js", icon: "⚛️", level: 82 },
    { name: "JavaScript", icon: "🟨", level: 80 },
    { name: "Node.js", icon: "🟩", level: 72 },
    { name: "Docker", icon: "🐳", level: 75 },
    { name: "Redis", icon: "🔴", level: 70 },
    { name: "MongoDB", icon: "🍃", level: 74 },
    { name: "MySQL", icon: "🗄️", level: 76 },
    { name: "ClickHouse", icon: "🏠", level: 68 },
    { name: "C++", icon: "⚙️", level: 65 },
    { name: "Tailwind CSS", icon: "🎨", level: 85 },
    { name: "Git / GitHub", icon: "🐙", level: 88 },
  ]

  const experience = [
    {
      company: "Finesse Stock Broking Service Pvt. Ltd.",
      role: "Associate Software Development Engineer",
      period: "Nov 2025 - Present",
      location: "Delhi, India",
      points: [
        "Processed 22,000+ crore rows of financial time-series data using Pandas and NumPy with auto-restart on failure, ensuring zero data loss in production.",
        "Maintained and optimized Redis clusters and ClickHouse columnar database instances deployed via Docker on Ubuntu, improving query throughput for real-time analytics.",
        "Built FastAPI-based backtesting software for algorithmic trading strategies; engineered multi-dimensional matrix computation pipelines to accelerate indicator calculations.",
        "Developed scalable data ingestion pipelines for time-series databases handling high-velocity live market feeds with fault-tolerance and high reliability."
      ]
    },
    {
      company: "Appz Global Tech Pvt. Ltd.",
      role: "Intern → Python Developer",
      period: "Mar 2025 - Sep 2025",
      location: "Noida, India",
      points: [
        "Promoted to Python Developer within 4 months; designed and maintained backend infrastructure for enterprise Attendance and Parking Management Systems.",
        "Built REST API endpoints integrating face recognition for automated attendance and ANPR for vehicle access control.",
        "Implemented automation scripts for real-time market data processing."
      ]
    }
  ];

  const projects = [
    {
      name: "Fatha - Billing & Account Management",
      tech: ["Python", "PyInstaller", ".NET 8", "CSV"],
      desc: "Fully portable, zero-database billing desktop app persisting data via structured CSV files; packaged as a single executable via PyInstaller for one-click deployment. Integrated Windows Native Share dialog via a C# ShareBridge component.",
      github: "https://github.com/yash-Devlop/Fatha",
      live: null,
    },
    {
      name: "Appartelle - Real Estate Platform",
      tech: ["Django", "MySQL", "JavaScript", "HTML/CSS"],
      desc: "Full-stack real estate web app with apartment listings, visit scheduling, and OTP-based 2FA. Role-based admin panel for property managers with CRUD operations, booking management, and a responsive mobile-friendly UI.",
      github: "https://github.com/yash-Devlop/real_estate",
      live: null,
    },
    {
      name: "Frags - E-Commerce Platform",
      tech: ["React.js", "Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
      desc: "Responsive E-commerce website with buy/sell functionality, user account creation, and full MERN stack implementation. Backend via Express.js and frontend using React.js with Tailwind CSS.",
      github: "https://github.com/yash-Devlop/Frags-1",
      live: "https://frags-1.vercel.app/",
    },
    {
      name: "Popcorn - Movie Trailer App",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      desc: "Responsive movie trailer watching website where users can discover and watch trailers of the latest hits and releases. Clean UI with smooth navigation and mobile-first design.",
      github: "https://github.com/yash-Devlop/popcorn1-main",
      live: "https://popcorn1-main.vercel.app",
    }
  ];

  return (
    <div style={{ background: '#0a0a0a', color: '#f5f5f5', fontFamily: "'Inter', 'Segoe UI', sans-serif", overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '1rem 3rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1f1f1f' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <button onClick={() => scrollTo(heroRef)} style={{ fontWeight: 700, fontSize: '1.25rem', color: '#f97316', letterSpacing: '-0.02em', background: 'none', border: 'none', cursor: 'pointer' }}>
          YG<span style={{ color: '#f5f5f5' }}>.</span>
        </button>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[['Experience', experienceRef], ['Projects', projectsRef], ['Skills', skillsRef], ['Contact', contactRef]].map(([label, ref]) => (
            <button key={label} onClick={() => scrollTo(ref)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#a3a3a3', fontSize: '0.9rem', fontWeight: 500,
              transition: 'color 0.2s', letterSpacing: '0.02em'
            }}
              onMouseEnter={e => e.target.style.color = '#f97316'}
              onMouseLeave={e => e.target.style.color = '#a3a3a3'}
            >{label}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '0 5%', paddingTop: '80px',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)'
        }} />

        {/* Orange glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ position: 'relative', maxWidth: '900px' }}>
          {/* Terminal line */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#141414', border: '1px solid #2a2a2a',
            borderRadius: '4px', padding: '6px 14px', marginBottom: '2rem',
            fontSize: '0.8rem', color: '#a3a3a3', fontFamily: 'monospace'
          }}>
            <span style={{ color: '#f97316' }}>●</span>
            <span style={{ color: '#fbbf24' }}>●</span>
            <span style={{ color: '#34d399' }}>●</span>
            <span style={{ marginLeft: '8px' }}>~/portfolio</span>
            <span style={{ color: '#f97316' }}>$</span>
            <span>whoami</span>
          </div>

          <p style={{ color: '#f97316', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Hello, World — I'm
          </p>

          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 800,
            lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.03em'
          }}>
            Yash
            <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              Gupta
              <span style={{
                position: 'absolute', bottom: '-6px', left: 0, right: 0, height: '4px',
                background: 'linear-gradient(90deg, #f97316, #ea580c)',
                borderRadius: '2px'
              }} />
            </span>
          </h1>

          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 400, color: '#a3a3a3', marginBottom: '2rem', minHeight: '2.5rem' }}>
            <span style={{ color: '#f5f5f5' }}>{displayed}</span>
            <span style={{ color: '#f97316', animation: 'blink 1s infinite' }}>|</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#737373', maxWidth: '580px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Software Developer with 1+ year of experience building backend systems using Python, FastAPI, and Django — plus frontend interfaces with React.js. Specialized in large-scale data pipelines, RESTful APIs, and production infrastructure.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo(projectsRef)} style={{
              padding: '0.85rem 2rem', background: '#f97316', color: '#0a0a0a',
              border: 'none', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem',
              cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '0.02em'
            }}
              onMouseEnter={e => e.target.style.background = '#ea580c'}
              onMouseLeave={e => e.target.style.background = '#f97316'}
            >
              View Projects →
            </button>
            <button onClick={() => scrollTo(contactRef)} style={{
              padding: '0.85rem 2rem', background: 'transparent', color: '#f5f5f5',
              border: '1px solid #2a2a2a', borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.target.style.borderColor = '#f97316'; e.target.style.color = '#f97316'; }}
              onMouseLeave={e => { e.target.style.borderColor = '#2a2a2a'; e.target.style.color = '#f5f5f5'; }}
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #1f1f1f' }}>
            {[['1+', 'Year Experience'], ['10+', 'Projects Built']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f97316' }}>{num}</div>
                <div style={{ fontSize: '0.8rem', color: '#737373', marginTop: '2px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section ref={experienceRef} style={{ padding: '6rem 5%' }}>
        <SectionLabel label="Experience" />
        <h2 style={sectionTitle}>Where I've Worked</h2>

        <div style={{ maxWidth: '800px', marginTop: '3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '16px', top: 0, bottom: 0, width: '1px', background: '#1f1f1f' }} />
          {experience.map((exp, i) => (
            <div key={i} style={{ paddingLeft: '3.5rem', marginBottom: '3.5rem', position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '8px', top: '6px',
                width: '18px', height: '18px', borderRadius: '50%',
                background: '#f97316', border: '3px solid #0a0a0a',
                boxShadow: '0 0 12px rgba(249,115,22,0.5)'
              }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', color: '#f5f5f5' }}>{exp.role}</h3>
                  <p style={{ color: '#f97316', fontWeight: 600, fontSize: '0.95rem', marginTop: '2px' }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: '4px', padding: '4px 10px', fontSize: '0.8rem', color: '#a3a3a3' }}>{exp.period}</span>
                  <p style={{ fontSize: '0.8rem', color: '#737373', marginTop: '4px' }}>{exp.location}</p>
                </div>
              </div>
              <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.75rem', color: '#a3a3a3', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <span style={{ color: '#f97316', flexShrink: 0, marginTop: '2px' }}>▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section ref={projectsRef} style={{ padding: '6rem 5%', background: '#0d0d0d' }}>
        <SectionLabel label="Projects" />
        <h2 style={sectionTitle}>What I've Built</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem', marginTop: '3rem'
        }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section ref={skillsRef} style={{ padding: '6rem 5%' }}>
        <SectionLabel label="Skills" />
        <h2 style={sectionTitle}>Technical Arsenal</h2>

        <div style={{ marginTop: '3rem', maxWidth: '900px' }}>
          {/* About blurb */}
          <div style={{
            background: '#141414', border: '1px solid #1f1f1f', borderRadius: '12px',
            padding: '2rem', marginBottom: '3rem', borderLeft: '3px solid #f97316'
          }}>
            <p style={{ color: '#a3a3a3', lineHeight: 1.8, fontSize: '0.95rem' }}>
              B.Tech in Electronics & Communication Engineering from <strong style={{ color: '#f5f5f5' }}>Maharishi Dayanand University</strong> (2024). Detail-oriented and highly motivated software developer with a focus on backend systems, data pipelines, and algorithmic trading infrastructure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {skills.map((s, i) => (
              <SkillCard key={i} skill={s} />
            ))}
          </div>

          {/* Tech tags */}
          <div style={{ marginTop: '3rem' }}>
            <p style={{ fontSize: '0.8rem', color: '#737373', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Also comfortable with</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['WebSockets', 'REST APIs', 'Pytest', 'Pandas', 'NumPy', 'Linux/Ubuntu', 'PyInstaller', 'MS SQL Server', 'Agile', 'OOP', 'System Design', 'MVC', 'DSA'].map(tag => (
                <span key={tag} style={{
                  background: '#141414', border: '1px solid #2a2a2a', borderRadius: '4px',
                  padding: '4px 12px', fontSize: '0.8rem', color: '#737373'
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} style={{ padding: '6rem 5%', background: '#0d0d0d' }}>
        <SectionLabel label="Contact" />
        <h2 style={sectionTitle}>Let's Work Together</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem', maxWidth: '900px' }}>
          {/* Info */}
          <div>
            <p style={{ color: '#a3a3a3', lineHeight: 1.8, marginBottom: '2rem' }}>
              I'm currently open to full-time roles and internship opportunities. Whether you have a project idea, a job offer, or just want to say hi — my inbox is always open.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Email', value: 'yash243mac@gmail.com', href: 'mailto:yash243mac@gmail.com' },
                { label: 'LinkedIn', value: 'linkedin/yash-gupta', href: 'https://linkedin.com/in/yash-gupta-1468a51b2' },
                { label: 'GitHub', value: 'github/yash-Devlop', href: 'https://github.com/yash-Devlop' },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
                  display: 'flex', gap: '1rem', alignItems: 'center',
                  color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = '#a3a3a3'}
                >
                  <span style={{ fontSize: '0.7rem', color: '#f97316', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: '60px' }}>{link.label}</span>
                  <span style={{ fontSize: '0.9rem' }}>{link.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Your Name', name: 'user_name', type: 'text', placeholder: 'Yash Gupta' },
              { label: 'Your Email', name: 'user_email', type: 'email', placeholder: 'yash@example.com' },
              { label: 'Subject', name: 'subject', type: 'text', placeholder: 'Project inquiry...' },
            ].map(field => (
              <div key={field.name}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#737373', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{field.label}</label>
                <input
                  type={field.type} name={field.name} required placeholder={field.placeholder}
                  style={{
                    width: '100%', padding: '0.75rem 1rem', background: '#141414',
                    border: '1px solid #2a2a2a', borderRadius: '6px', color: '#f5f5f5',
                    fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s'
                  }}
                  onFocus={e => e.target.style.borderColor = '#f97316'}
                  onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: '#737373', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
              <textarea
                name="message" rows={5} required placeholder="Tell me about your project or opportunity..."
                style={{
                  width: '100%', padding: '0.75rem 1rem', background: '#141414',
                  border: '1px solid #2a2a2a', borderRadius: '6px', color: '#f5f5f5',
                  fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box', transition: 'border-color 0.2s',
                  fontFamily: 'inherit'
                }}
                onFocus={e => e.target.style.borderColor = '#f97316'}
                onBlur={e => e.target.style.borderColor = '#2a2a2a'}
              />
            </div>
            <button type="submit" disabled={sending} style={{
              padding: '0.85rem', background: sent ? '#16a34a' : '#f97316',
              color: '#0a0a0a', border: 'none', borderRadius: '6px',
              fontWeight: 700, fontSize: '0.95rem', cursor: sending ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s', opacity: sending ? 0.7 : 1
            }}
              onMouseEnter={e => { if (!sending && !sent) e.target.style.background = '#ea580c'; }}
              onMouseLeave={e => { if (!sending && !sent) e.target.style.background = '#f97316'; }}
            >
              {sent ? '✓ Message Sent!' : sending ? 'Sending...' : 'Send Message →'}
            </button>
            {error && <p style={{ color: '#f87171', fontSize: '0.85rem' }}>Failed to send. Try emailing directly.</p>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '2rem 5%', borderTop: '1px solid #1f1f1f',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem'
      }}>
        <button onClick={() => scrollTo(heroRef)} style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f97316', background: 'none', border: 'none', cursor: 'pointer' }}>YG.</button>
        <p style={{ color: '#737373', fontSize: '0.85rem' }}>© 2025 Yash Gupta. Designed & Built with ❤️</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/yash-Devlop' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/yash-gupta-1468a51b2' },
            { label: 'Email', href: 'mailto:yash243mac@gmail.com' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{
              color: '#737373', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.target.style.color = '#f97316'}
              onMouseLeave={e => e.target.style.color = '#737373'}
            >{l.label}</a>
          ))}
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #f97316; }
        ::placeholder { color: #404040; }
      `}</style>
    </div>
  );
}

// Sub-components
const sectionTitle = {
  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800,
  letterSpacing: '-0.03em', marginTop: '0.5rem', color: '#f5f5f5'
};

function SectionLabel({ label }) {
  return (
    <span style={{
      fontSize: '0.75rem', fontWeight: 700, color: '#f97316',
      textTransform: 'uppercase', letterSpacing: '0.15em',
      fontFamily: "'JetBrains Mono', monospace"
    }}>
      // {label}
    </span>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#141414',
        border: `1px solid ${hovered ? '#f97316' : '#1f1f1f'}`,
        borderRadius: '12px', padding: '1.75rem',
        transition: 'all 0.25s', cursor: 'default',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 16px 48px rgba(249,115,22,0.1)' : 'none'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <span style={{ fontSize: '1.5rem', color: '#f97316' }}>◈</span>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" style={{ color: '#737373', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f97316'}
              onMouseLeave={e => e.target.style.color = '#737373'}>
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" style={{ color: '#737373', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f97316'}
              onMouseLeave={e => e.target.style.color = '#737373'}>
              Live ↗
            </a>
          )}
        </div>
      </div>
      <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.75rem', color: '#f5f5f5' }}>{project.name}</h3>
      <p style={{ color: '#737373', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{project.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)',
            borderRadius: '3px', padding: '3px 8px', fontSize: '0.75rem',
            color: '#f97316', fontFamily: "'JetBrains Mono', monospace"
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#141414', border: `1px solid ${hovered ? '#f97316' : '#1f1f1f'}`,
        borderRadius: '10px', padding: '1.25rem', transition: 'all 0.2s'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '0.9rem', color: '#f5f5f5', fontWeight: 600 }}>{skill.icon} {skill.name}</span>
        <span style={{ fontSize: '0.75rem', color: '#f97316', fontWeight: 700 }}>{skill.level}%</span>
      </div>
      <div style={{ height: '3px', background: '#2a2a2a', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${skill.level}%`,
          background: 'linear-gradient(90deg, #f97316, #ea580c)',
          borderRadius: '2px', transition: 'width 0.5s ease'
        }} />
      </div>
    </div>
  );
}

export default App;
