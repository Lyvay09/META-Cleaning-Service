import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/authService";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await signUp(form.email, form.password);
      setMessage("Registration successful. Check your email if confirmation is enabled, then sign in.");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-panel">
        <Link to="/" className="auth-back">← Website</Link>
        <div className="auth-brand"><span className="brand-mark">✦</span> META Cleaning Service</div>
        <h1>Create account</h1>
        <p>Set up an admin account for the demo system.</p>
        <form onSubmit={submit} className="auth-form">
          <label>Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
          <label>Password<input type="password" minLength="6" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label>
          {error && <div className="error-note">{error}</div>}
          {message && <div className="success-note">{message}</div>}
          <button className="button button-primary auth-submit">Create account</button>
        </form>
        <div className="auth-footer">Already registered? <Link to="/login">Sign in</Link></div>
      </div>
      <div className="auth-art"><div className="auth-art-card"><span>✓</span><h2>Simple access.<br />Secure management.</h2><p>Authentication is handled through Supabase.</p></div></div>
    </div>
  );
}