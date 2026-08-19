import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="page-section">
      <div className="page-hero">
        <span className="eyebrow">CONTACT META</span>
        <h1>Let's connect with us.</h1>
        <p>Contact META Cleaning Services for cleaning, maintenance, repair, and project consultation.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-visual-card">
          <img src="/assets/contact-meta.jpg" alt="META Cleaning Services" />
          <div className="contact-visual-content">
            <strong>META Cleaning Service</strong>
            <span>Professional cleaning and maintenance</span>
          </div>
        </div>

        <div className="contact-stack">
          <div className="contact-info">
            <div><strong>Phone</strong><span>+855 10 364 289</span><span>+855 12 428 926</span></div>
            <div><strong>Email</strong><span>metacleaningservice@gmail.com</span></div>
            <div><strong>Telegram</strong><span>Chat with META Cleaning Service</span><a className="contact-channel-link" href="https://t.me/+85512428926" target="_blank" rel="noreferrer">Open Telegram →</a></div>
            <div><strong>Facebook</strong><span>META Cleaning Service</span></div>
            <div><strong>Address</strong><span>#104, St. Betong, Phum Kbal Damrei 1, Sangkat Kakab, Khan Por Sen Chey, Phnom Penh</span></div>
          </div>

          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <h2>Request a service</h2>
            <a className="telegram-button" href="https://t.me/metacleaning" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="48" height="48">
  <circle cx="120" cy="120" r="120" fill="#24A1DE"/>
  <path fill="#FFFFFF" d="M98 175c-3.88 0-3.22-1.46-4.56-5.16L81 129.8 168.3 78.2c4.12-2.5 7.9-1.15 4.8 1.6L102.5 144.1l-2.8 39.7c3.8 0 5.5-1.74 7.6-3.8l18.2-17.7 37.8 27.9c6.96 3.84 11.96 1.86 13.7-6.42l24.8-116.8c2.54-10.18-3.86-14.78-10.5-12.28L25.3 125.8c-9.92 3.98-9.84 9.52-1.8 12l43.2 13.5 100.1-63.1c4.72-2.86 9.04-1.33 5.48 1.82L98 175z"/>
</svg>
 Contact us on Telegram
            </a>
            <label>Name<input required placeholder="Your name" /></label>
            <label>Email<input type="email" required placeholder="you@example.com" /></label>
            <label>Service<select defaultValue=""><option value="" disabled>Select a service</option><option>High-Level Glass & Alucobond Cleaning</option><option>High-Level Iron Net Cleaning</option><option>Wall Cleaning</option><option>Resilicon & Silicone Repairing</option><option>Wall Cracks Repairing & Repainting</option><option>General Deep Cleaning Service</option><option>High-Level Maintaining Service</option></select></label>
            <label>Message<textarea required rows="5" placeholder="Tell us about your project or cleaning needs..." /></label>
            <button className="button button-primary" type="submit">Send Request →</button>
            {sent && <div className="success-note">Thank you. META Cleaning Services will follow up with your request.</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
