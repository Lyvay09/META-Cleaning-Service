import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function PublicHeader() {
  return (
    <header className="site-header">
      <Logo />
      <nav className="site-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Link className="button button-primary header-cta" to="/contact">Request a Service</Link>
    </header>
  );
}
