export default function About() {
  return (
    <section className="page-section">
      <div className="about-intro-grid">
        <div className="page-hero">
          <span className="eyebrow">ABOUT COMPANY</span>
          <h1>META Cleaning Services</h1>
          <p>
            META Cleaning Services was established with a great passion to create a clean space
            by delivering the best services. The company is highly committed to producing a green
            environment and conserving sustainability.
          </p>
        </div>
        <img src="/assets/company-06.jpg" alt="META company building cleaning project" className="about-feature-image" />
      </div>

      <div className="about-story-grid">
        <div>
          <span className="eyebrow">OUR APPROACH</span>
          <h2>Professional cleaning with a strong focus on quality.</h2>
          <p>
            As a professional cleaning company, META aspires to provide widely cleaning operations
            to fulfil customers' expectations and comprehensive cleaning consultation.
          </p>
          <p>
            Our work covers high-level exterior cleaning, maintenance, repair, repainting,
            deep cleaning, and related building care.
          </p>
        </div>

        <div className="value-card">
          <span className="value-mark">META</span>
          <h3>Our Value</h3>
          <p>Clean environments, responsible service, and professional care for every project.</p>
        </div>
      </div>

      <div className="mission-vision-grid">
        <div className="mission-vision-card">
          <span>MISSION</span>
          <h3>Bright, clean and healthy environments.</h3>
          <p>To provide our customers having bright, clean and healthy environments through cleaning services.</p>
        </div>
        <div className="mission-vision-card">
          <span>VISION</span>
          <h3>Beautiful spaces where people like to be.</h3>
          <p>META focuses on a single vision: creating beautiful spaces where people like to be.</p>
        </div>
      </div>
    </section>
  );
}
