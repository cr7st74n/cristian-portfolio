import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const SKILLS = [
  { label: 'React / JavaScript', pct: 88 },
  { label: 'Node.js / APIs', pct: 78 },
  { label: 'IT Support / Help Desk', pct: 92 },
  { label: 'Active Directory / M365', pct: 85 },
  { label: 'HTML / CSS', pct: 90 },
  { label: 'Problem Solving', pct: 95 },
];

const TABS = ['My Journey', 'Web Apps', 'IT Support'];
const TAB_CONTENT = {
  'My Journey': 'From IT help desk to front-end developer, I blend technical support with coding to build seamless web experiences. My dual background gives me a unique edge — I understand both the user side and the infrastructure beneath every application.',
  'Web Apps': 'I build responsive, user-focused web applications using modern JavaScript frameworks. Every project starts with clean code, thoughtful architecture, and a commitment to performance that users actually feel.',
  'IT Support': 'Hands-on experience resolving complex IT issues, managing Active Directory, and supporting Microsoft 365 users daily. I bring systematic troubleshooting skills that translate directly into writing better, more resilient code.',
};

function SkillBar({ label, pct, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setWidth(pct), delay); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct, delay]);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__top">
        <span className="skill-bar__label">{label}</span>
        <span className="skill-bar__pct">{pct}%</span>
      </div>
      <div className="skill-bar__track">
        <div className="skill-bar__fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState('My Journey');

  return (
    <section id="about" className="about">
      <div className="about__bg-text">ABOUT</div>

      <div className="container">
        <div className="section-header">
          <span className="section-label">// about me</span>
          <h2 className="section-title">The Person <br /><em>Behind the Code</em></h2>
        </div>

        <div className="about__grid">
          {/* Left: image + accent */}
          <div className="about__visual">
            <div className="about__img-wrap">
              <div className="about__img-accent" />
              <div className="about__img-frame">
                <div className="about__avatar">
                  <span>CG</span>
                </div>
              </div>
              <div className="about__img-tag">
                <span className="about__img-tag-dot" />
                Open to opportunities
              </div>
            </div>
          </div>

          {/* Right: tabs + content */}
          <div className="about__info">
            <div className="about__tabs">
              {TABS.map(tab => (
                <button
                  key={tab}
                  className={`about__tab ${activeTab === tab ? 'about__tab--active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <p className="about__text">{TAB_CONTENT[activeTab]}</p>

            <div className="about__details">
              <div className="about__detail">
                <span className="about__detail-key">Location</span>
                <span className="about__detail-val">New York / Remote</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-key">Focus</span>
                <span className="about__detail-val">Front-End + IT</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-key">Status</span>
                <span className="about__detail-val about__detail-val--green">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="about__skills">
          <h3 className="about__skills-title">
            <span>Skill Set</span>
            <span className="about__skills-sub">JavaScript, React, Node.js, and hands-on IT infrastructure expertise.</span>
          </h3>
          <div className="about__skills-grid">
            {SKILLS.map((s, i) => (
              <SkillBar key={s.label} label={s.label} pct={s.pct} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
