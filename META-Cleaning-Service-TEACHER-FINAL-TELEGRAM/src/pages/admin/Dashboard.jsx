import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "../../services/serviceService";
import { getCompanyInfo } from "../../services/companyInfoService";

const defaultCompanyInfo = {
  phone: "010 364 289 / 012 428 926",
  email: "infomcs2023@gmail.com",
  facebook: "Cleaning Services-META",
  address:
    "#104, St. Betong, Phum Kbal Damrei 1, Sangkat Kakab, Khan Por Sen Chey, Phnom Penh",
};

export default function Dashboard() {
  const [services, setServices] = useState([]);
  const [companyInfo, setCompanyInfo] = useState(defaultCompanyInfo);

  useEffect(() => {
    getServices()
      .then(setServices)
      .catch(() => {});

    getCompanyInfo()
      .then((data) => {
        if (data) {
          setCompanyInfo(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      <header className="admin-topbar">
        <div>
          <span className="eyebrow">ADMIN DASHBOARD</span>
          <h1>Welcome to META Cleaning Service.</h1>
          <p>Manage company services and service images from one place.</p>
        </div>

        <Link className="button button-primary" to="/admin/services">
          Manage Services →
        </Link>
      </header>

      <section className="admin-stat-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-icon">✦</div>
          <span>Services</span>
          <strong>{services.length || 7}</strong>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">▣</div>
          <span>Service Categories</span>
          <strong>4</strong>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">◌</div>
          <span>Company Photos</span>
          <strong>12</strong>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">✓</div>
          <span>Website Status</span>
          <strong>Live</strong>
        </div>
      </section>

      <section className="admin-grid-two">
        {/* SERVICES */}
        <div className="admin-panel">
          <div className="panel-heading">
            <div>
              <h2>Service portfolio</h2>
              <p>Services available on the public website.</p>
            </div>

            <Link className="text-button" to="/admin/services">
              CRUD
            </Link>
          </div>

          <div className="admin-service-preview-grid">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="admin-service-preview">
                <img
                  src={service.image_url || "/assets/company-01.jpg"}
                  alt={service.name}
                />
                <strong>{service.name}</strong>
                <span>{service.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COMPANY INFORMATION */}
        <div className="admin-panel">
          <div className="panel-heading">
            <div>
              <h2>Company information</h2>
              <p>Manage the information shown on the website.</p>
            </div>

            <Link
              className="text-button"
              to="/admin/company-info"
            >
              Edit
            </Link>
          </div>

          <div className="company-info-mini">
            <div>
              <strong>Phone</strong>
              <span>{companyInfo.phone}</span>
            </div>

            <div>
              <strong>Email</strong>
              <span>{companyInfo.email}</span>
            </div>

            <div>
              <strong>Facebook</strong>
              <span>{companyInfo.facebook}</span>
            </div>

            <div>
              <strong>Address</strong>
              <span>{companyInfo.address}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}