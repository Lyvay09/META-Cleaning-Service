import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="brand" to="/">
      <img src="/assets/logo.png" alt="META Cleaning Service" className="site-logo" />
      <span className="brand-copy">
        <strong>META Cleaning Service</strong>
        <small>Professional Cleaning & Maintenance</small>
      </span>
    </Link>
  );
}
