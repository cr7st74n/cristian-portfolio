import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Dashboard App',
    category: 'Web App',
    description: 'A full-featured analytics dashboard built with React, featuring real-time data visualization, responsive layout, and interactive charts.',
    image: 'https://images.unsplash.com/photo-1666892666066-abe5c4865e9c?q=85&w=500&h=500&fit=crop',
    tags: ['React', 'JavaScript', 'CSS'],
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce Site',
    category: 'Web App',
    description: 'Built a fully responsive online store using React and API integration for seamless shopping.',
    image: 'https://images.unsplash.com/photo-1687006067259-6de13ca3875e?q=85&w=500&h=550&fit=crop',
    tags: ['React', 'API', 'Node.js'],
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Site',
    category: 'Web App',
    description: 'Created a personal portfolio highlighting projects, skills, and professional background.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=85&w=500&h=500&fit=crop',
    tags: ['React', 'CSS', 'Design'],
    featured: false,
  },
  {
    id: 4,
    title: 'Help Desk Tool',
    category: 'IT Tool',
    description: 'Developed an internal tool to streamline IT support ticket tracking and user communication.',
    image: 'https://images.unsplash.com/photo-1610994238985-5afed0d13d54?q=85&w=500&h=550&fit=crop',
    tags: ['JavaScript', 'IT Support', 'UX'],
    featured: true,
  },
  {
    id: 5,
    title: 'Task Manager',
    category: 'Web App',
    description: 'A productivity-focused task manager with drag-and-drop, priority labels, and team collaboration built with React.',
    image: 'https://images.unsplash.com/photo-1644995520656-e9b9a807ffbe?q=85&w=340&h=340&fit=crop',
    tags: ['React', 'State Mgmt', 'CSS'],
    featured: false,
  },
  {
    id: 6,
    title: 'Weather App',
    category: 'Web App',
    description: 'A sleek weather app built with React that fetches live data from an API and updates in real-time.',
    image: 'https://images.unsplash.com/photo-1644995520656-e9b9a807ffbe?q=85&w=340&h=340&fit=crop',
    tags: ['React', 'REST API', 'Geolocation'],
    featured: false,
  },
];

const FILTERS = ['All', 'Web App', 'IT Tool'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState(null);

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects__bg-grid" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">// projects</span>
          <h2 className="section-title">
            Things I've <br /><em>Built</em>
          </h2>
        </div>

        {/* Filter bar */}
        <div className="projects__filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`projects__filter ${filter === f ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="projects__filter-count">
                {f === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? 'project-card--featured' : ''} ${hovered === project.id ? 'project-card--hovered' : ''}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="project-card__img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                  loading="lazy"
                />
                <div className="project-card__overlay">
                  <a href="#contact" className="project-card__view-btn">
                    View Project
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                {project.featured && (
                  <span className="project-card__badge">Featured</span>
                )}
              </div>

              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__category">{project.category}</span>
                  <span className="project-card__num">0{project.id}</span>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Gallery strip */}
        <div className="projects__gallery">
          <div className="projects__gallery-header">
            <h3>Gallery</h3>
            <p>Snapshots of my web projects showcasing clean code and responsive design.</p>
          </div>
          <div className="projects__gallery-grid">
            {[
              'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=85&w=275&h=275&fit=crop',
              'https://images.unsplash.com/photo-1524221629551-6dd14def5ffd?q=85&w=275&h=275&fit=crop',
              'https://images.unsplash.com/photo-1509395286499-2d94a9e0c814?q=85&w=275&h=275&fit=crop',
              'https://images.unsplash.com/photo-1650234083177-871b96b6c575?q=85&w=275&h=275&fit=crop',
              'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=85&w=275&h=275&fit=crop',
              'https://images.unsplash.com/photo-1625398122646-049e15c5fb1b?q=85&w=275&h=275&fit=crop',
              'https://images.unsplash.com/photo-1699736059098-ffea3debef5a?q=85&w=275&h=275&fit=crop',
              'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=85&w=275&h=275&fit=crop',
            ].map((url, i) => (
              <div key={i} className="projects__gallery-item">
                <img src={url} alt={`Project snapshot ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
