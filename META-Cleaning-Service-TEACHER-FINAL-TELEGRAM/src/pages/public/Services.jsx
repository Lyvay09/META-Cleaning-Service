import { useEffect, useState } from "react";
import { getServices } from "../../services/serviceService";
import { Link } from "react-router-dom";

const fallback = [
  { id: 1, name: "High-Level Glass & Alucobond Cleaning", category: "Building Exterior", description: "Specialized high-level cleaning for glass façades and Alucobond surfaces.", image_url: "/assets/company-10.jpg" },
  { id: 2, name: "High-Level Iron Net Cleaning", category: "Building Exterior", description: "High-level cleaning and maintenance for iron net and exterior structures.", image_url: "/assets/company-01.jpg" },
  { id: 3, name: "Wall Cleaning", category: "Building Exterior", description: "Professional exterior wall cleaning for commercial and residential buildings.", image_url: "/assets/company-02.jpg" },
  { id: 4, name: "Resilicon & Silicone Repairing", category: "Repair & Maintenance", description: "Repairing and maintaining silicone and exterior joints on building surfaces.", image_url: "/assets/company-03.jpg" },
  { id: 5, name: "Wall Cracks Repairing & Repainting", category: "Repair & Maintenance", description: "Exterior crack repair and repainting services for building walls.", image_url: "/assets/company-09.jpg" },
  { id: 6, name: "General Deep Cleaning Service", category: "Cleaning Service", description: "Deep cleaning for spaces that need detailed and careful treatment.", image_url: "/assets/company-07.jpg" },
  { id: 7, name: "High-Level Maintaining Service", category: "Maintenance", description: "High-level building maintenance support for exterior surfaces.", image_url: "/assets/company-08.jpg" },
];

export default function Services() {
  const [services, setServices] = useState(fallback);

  useEffect(() => {
    getServices().then((data) => data?.length && setServices(data)).catch(() => {});
  }, []);

  return (
    <section className="page-section">
      <div className="page-hero">
        <span className="eyebrow">OUR SERVICES</span>
        <h1>Professional services for demanding buildings and spaces.</h1>
        <p>
          No public pricing is shown. Customers can request a service and contact META
          directly for consultation and project details.
        </p>
      </div>

      <div className="service-grid detailed-services">
        {services.map((service) => (
          <article className="service-card image-service-card" key={service.id}>
            <div className="service-image-wrap">
              <img src={service.image_url || "/assets/company-01.jpg"} alt={service.name} className="service-image" />
              <span className="service-pill image-pill">{service.category}</span>
            </div>
            <div className="service-card-body">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <Link to="/contact">Request consultation →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
