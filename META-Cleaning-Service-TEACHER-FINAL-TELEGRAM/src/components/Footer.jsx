import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-company">
        <Logo />
        <p>Professional cleaning, high-level maintenance, and exterior building care.</p>
      </div>

      <div>
        <h4>Explore</h4>
        <Link to="/about">About Company</Link>
        <Link to="/services">Our Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <h4>Admin</h4>
        <Link to="/login">Sign in</Link>
        <Link to="/register">Register</Link>
        <Link to="/forgot-password">Forgot password</Link>
      </div>

      <div>
        <h4>Contact</h4>
        <span>+855 10 364 289</span>
        <span>+855 12 428 926</span>
        <span>metacleaningservice@gmail.com</span>
        <a className="footer-telegram" href="https://t.me/metacleaning" target="_blank" rel="noreferrer">Telegram: Message us</a>
      </div>

      <div className="footer-address">
        <span>#104, St. Betong, Phum Kbal Damrei 1</span>
        <span>Sangkat Kakab, Khan Por Sen Chey, Phnom Penh</span>
        <span>Facebook: Cleaning Services-META</span>
      </div>
    </footer>
  );
}
