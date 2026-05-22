import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Cristian's attention to detail made our website both beautiful and easy to navigate.",
    name: 'John Doe',
    location: 'New York',
    initials: 'JD',
  },
  {
    id: 2,
    quote: "His quick problem-solving skills saved us time and kept everything running smoothly.",
    name: 'John Doe',
    location: 'New York',
    initials: 'JD',
  },
  {
    id: 3,
    quote: "Cristian's attention to detail and quick problem-solving made our project smooth and efficient from start to finish.",
    name: 'Alex M.',
    location: 'Remote',
    initials: 'AM',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(a => (a + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__inner">
          <div className="testimonials__header">
            <span className="section-label">// feedback</span>
            <h2 className="section-title">What People <br /><em>Are Saying</em></h2>
          </div>

          <div className="testimonials__carousel">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.id}
                className={`testimonial ${i === active ? 'testimonial--active' : ''}`}
              >
                <div className="testimonial__quote-mark">"</div>
                <p className="testimonial__text">{t.quote}</p>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">{t.initials}</div>
                  <div>
                    <span className="testimonial__name">{t.name}</span>
                    <span className="testimonial__location">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="testimonials__dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
