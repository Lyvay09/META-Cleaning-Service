import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = async () => {
    if (supabase) await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" to="/admin">
          <img src="/assets/logo.png" alt="META Cleaning Service" />
          <span><strong>META Cleaning Service</strong><small>Admin Dashboard</small></span>
        </Link>
        <nav className="admin-nav">
          <NavLink to="/admin" end>▦ Dashboard</NavLink>
          <NavLink to="/admin/services"> Services</NavLink>
          <NavLink to="/services">↗ View Website</NavLink>
        </nav>
        <button className="sidebar-logout" onClick={logout}>↪ Logout</button>
      </aside>
      <main className="admin-main"><Outlet /></main>
    </div>
  );
}
