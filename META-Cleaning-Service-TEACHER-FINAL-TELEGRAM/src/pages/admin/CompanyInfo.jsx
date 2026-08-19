import { useEffect, useState } from "react";
import {
  getCompanyInfo,
  updateCompanyInfo,
} from "../../services/companyInfoService";

const blank = {
  phone: "",
  email: "",
  facebook: "",
  address: "",
};

export default function CompanyInfo() {
  const [form, setForm] = useState(blank);
  const [id, setId] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    loadCompanyInfo();
  }, []);

  async function loadCompanyInfo() {
    try {
      const data = await getCompanyInfo();

      if (data) {
        setId(data.id);
        setForm({
          phone: data.phone || "",
          email: data.email || "",
          facebook: data.facebook || "",
          address: data.address || "",
        });
      }
    } catch (error) {
      setStatus(error.message);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");

    try {
      await updateCompanyInfo(id, form);
      setStatus("Company information updated successfully.");
    } catch (error) {
      setStatus(error.message);
    }
  }

  return (
    <div>
      <header className="admin-topbar">
        <div>
          <span className="eyebrow">COMPANY SETTINGS</span>
          <h1>Company Information</h1>
          <p>Manage the contact information shown on the website.</p>
        </div>
      </header>

      <section className="admin-panel company-info-form">
        <form onSubmit={handleSubmit}>
          <label>
            Phone
            <input
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              placeholder="010 364 289 / 012 428 926"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="example@gmail.com"
            />
          </label>

          <label>
            Facebook
            <input
              value={form.facebook}
              onChange={(e) =>
                setForm({ ...form, facebook: e.target.value })
              }
              placeholder="Cleaning Services-META"
            />
          </label>

          <label>
            Address
            <textarea
              rows="4"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
              placeholder="Company address..."
            />
          </label>

          <button className="button button-primary" type="submit">
            Update Information
          </button>

          {status && (
            <div className="success-note">
              {status}
            </div>
          )}
        </form>
      </section>
    </div>
  );
}