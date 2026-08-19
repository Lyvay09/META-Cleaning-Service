import { Link } from "react-router-dom";

const serviceHighlights = [
  { title: "High-Level Glass & Alucobond Cleaning", image: "/assets/hight glass.jpg", text: "Professional care for glass façades and Alucobond building exteriors." },
  { title: "Wall Cleaning", image: "/assets/walll cleaning.png", text: "Exterior wall cleaning for buildings that need a refreshed appearance." },
  { title: "Wall Crack Repairing & Repainting", image: "/assets/wall crack repair.png", text: "Repair and repaint building walls to restore a clean, finished look." },
];

export default function Home() {
  return (
    <>
      <section className="hero company-hero">
        <div className="hero-copy">
          <span className="eyebrow">META CLEANING SERVICE</span>
          <h1>Professional cleaning for <span>buildings, spaces & surfaces.</span></h1>
          <p>
            We provide professional cleaning, high-level maintenance, repair, and
            exterior building care for customers who want bright, clean, and healthy environments.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="button button-primary">Request a Service →</Link>
            <Link to="/services" className="button button-secondary">View Our Services</Link>
          </div>
          <div className="trust-row">
            <span className="company-accent">META</span>
            <small>Professional Cleaning Services</small>
          </div>
        </div>
        <div className="hero-gallery">
          <div className="hero-main-image"><img src="/assets/first.png" alt="META high-level cleaning" /></div>
          <div className="hero-side-stack">
            <img src="/assets/Building maintenance.jpg" alt="Building maintenance" />
            <img src="/assets/Glass and Alucobond cleaning.jpg" alt="Glass and Alucobond cleaning" />
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="section-heading">
          <span className="eyebrow">ABOUT META</span>
          <h2>A company built around clean spaces and professional service.</h2>
        </div>
        <div className="intro-copy">
          <p>
            META Cleaning Services was established with a strong passion to create clean spaces
            by delivering quality services. The company is committed to a green environment
            and sustainability while providing professional cleaning operations and cleaning consultation.
          </p>
          <Link to="/about" className="text-link">Learn more about our company →</Link>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-heading centered">
          <span className="eyebrow">OUR SERVICES</span>
          <h2>What META Cleaning Service does?</h2>
          <p>Services based on the company profile you provided.</p>
        </div>
        <div className="feature-service-grid">
          {serviceHighlights.map((service) => (
            <article key={service.title} className="feature-service-card">
              <img src={service.image} alt={service.title} />
              <div className="card-overlay">
                <span>Professional Service</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="center-action"><Link to="/services" className="button button-dark">See all services →</Link></div>
      </section>

      <section className="section mission-band">
        <div className="mission-image"><img src="/assets/company-06.jpg" alt="META company profile" /></div>
        <div className="mission-content">
          <span className="eyebrow">MISSION & VISION</span>
          <h2>Bright, clean and healthy environments.</h2>
          <div className="mission-card"><strong>Mission</strong><p>To provide our customers with bright, clean and healthy environments through cleaning services.</p></div>
          <div className="mission-card"><strong>Vision</strong><p>Beautiful spaces where people like to be.</p></div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading centered">
          <span className="eyebrow">OUR WORK</span>
          <h2>Real company work and project </h2>
        </div>
        <div className="gallery-grid">
          {["1.jpg","2.jpg","3.jpg","company-07.jpg","company-08.jpg","company-09.jpg"].map((file, i) => (
            <img key={file} src={`/assets/${file}`} alt={`META project ${i + 1}`} />
          ))}
        </div>
      </section>

      <section className="cta-panel section">
        <div>
          <span className="eyebrow">LET'S CONNECT WITH US</span>
          <h2>Tell us what you need cleaned or maintained.</h2>
          <p>Phone: +85510 364 289 · +855 12 428 926 · Email: metacleaningservice.com</p>
        </div>
        <Link to="/contact" className="button button-dark">Contact META →</Link>
      </section>
    </>
  );
}
