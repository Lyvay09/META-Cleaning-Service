import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await resetPassword(email);
      setMessage("Password reset email sent.");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-panel">
        <Link to="/" className="auth-back">← Website</Link>
        <div className="auth-brand"><span className="brand-mark">✦</span> META Cleaning Service</div>
        <h1>Reset password</h1>
        <p>Enter your account email and we'll send a reset link.</p>
        <form onSubmit={submit} className="auth-form">
          <label>Email<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          {error && <div className="error-note">{error}</div>}
          {message && <div className="success-note">{message}</div>}
          <button className="button button-primary auth-submit">Send reset link</button>
        </form>
        <div className="auth-footer"><Link to="/login">← Back to sign in</Link></div>
      </div>
      <div className="auth-art"><div className="auth-art-card"><span>↺</span><h2>Easy recovery.<br />Keep moving.</h2><p>Designed for a complete authentication flow.</p></div></div>
    </div>
  );
}