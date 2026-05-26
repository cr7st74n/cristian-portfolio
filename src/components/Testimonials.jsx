import React, { useState, useEffect } from 'react';
import '../layout/Testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Cristian was working with me a years ago and the time he was in school as well. A brilliant, positive and smart young gentleman who was very quiet and working hard to finish his prototype. I love him. Super recommended.",
    name: 'Jerry Huang',
    location: 'New Jersey',
    initials: 'JH',
  },
  {
    id: 2,
    quote: "I absolutely loved working with Cristian. He was always bringing fun new ideas to the table, while not making anyone else feel unheard. Being that we were working on a full stack app together, we each had our own role and responsibility to follow. Cristian easily stuck to his commitments, while also being happy to work with his colleagues if we bumped into any issues. I look forward to working with him again sometime! :)",
    name: 'Gunnar Johnson',
    location: 'Minnesota',
    initials: 'GJ',
  },
  {
    id: 3,
    quote: "I have known Cristian for more than 7 years, during these years he has proven to be a committed, loyal, sincere, honest, responsible, collaborating person, a good friend and colleague, as well as a professional in all aspects of his life. He is self-taught and an excellent software development co-worker.",
    name: 'Edwin Marquez',
    location: 'Ecuador',
    initials: 'EM',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(a => (a + 1) % TESTIMONIALS.length);
    }, 12000);
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
