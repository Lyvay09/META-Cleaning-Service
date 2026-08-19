import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      await signIn(form.email, form.password);
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    }
  }

  return <AuthCard title="Welcome back" subtitle="Sign in to the META Cleaning Service admin dashboard." onSubmit={submit} form={form} setForm={setForm} error={error} button="Sign in" footer={<><span>Need an account?</span> <Link to="/register">Register</Link></>} extra={<Link to="/forgot-password">Forgot password?</Link>} />;
}

function AuthCard({ title, subtitle, onSubmit, form, setForm, error, button, footer, extra }) {
  return (
    <div className="auth-page">
      <div className="auth-panel">
        <Link to="/" className="auth-back">← Website</Link>
        <div className="auth-brand"><span className="brand-mark">✦</span> META Cleaning Service</div>
        <h1>{title}</h1><p>{subtitle}</p>
        <form onSubmit={onSubmit} className="auth-form">
          <label>Email<input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
          <label>Password<input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="••••••••" /></label>
          {extra && <div className="auth-extra">{extra}</div>}
          {error && <div className="error-note">{error}</div>}
          <button className="button button-primary auth-submit">{button}</button>
        </form>
        <div className="auth-footer">{footer}</div>
      </div>
      <div className="auth-art"><div className="auth-art-card"><span>✦</span><h2>Cleaner spaces.<br />Better business.</h2><p>Manage services and keep your cleaning operation organized.</p></div></div>
    </div>
  );
}