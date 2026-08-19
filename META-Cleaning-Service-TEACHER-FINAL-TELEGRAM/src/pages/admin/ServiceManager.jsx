import { useEffect, useState } from "react";
import {
  createService,
  deleteService,
  getServices,
  updateService,
  uploadServiceImage,
} from "../../services/serviceService";

const blank = {
  name: "",
  category: "Residential",
  description: "",
  image_url: "",
};

export default function ServiceManager() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(blank);
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("");

  async function load() {
    try {
      setServices(await getServices());
    } catch (error) {
      setStatus(error.message);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function chooseImage(file) {
    setImageFile(file || null);
    setPreview(file ? URL.createObjectURL(file) : form.image_url || "");
  }

  async function save(e) {
    e.preventDefault();
    setStatus("");

    try {
      let imageUrl = form.image_url || "";

      if (imageFile) {
        imageUrl = await uploadServiceImage(imageFile);
      }

      const payload = {
        name: form.name,
        category: form.category,
        description: form.description,
        image_url: imageUrl,
      };

      if (editingId) {
        await updateService(editingId, payload);
      } else {
        await createService(payload);
      }

      setForm(blank);
      setEditingId(null);
      setImageFile(null);
      setPreview("");
      setStatus("Service saved successfully.");
      await load();
    } catch (error) {
      setStatus(error.message);
    }
  }

  async function remove(id) {
    if (!window.confirm("Delete this service?")) return;

    try {
      await deleteService(id);
      await load();
    } catch (error) {
      setStatus(error.message);
    }
  }

  function edit(service) {
    setEditingId(service.id);
    setForm({
      name: service.name || "",
      category: service.category || "Residential",
      description: service.description || "",
      image_url: service.image_url || "",
    });
    setImageFile(null);
    setPreview(service.image_url || "");
  }

  function cancel() {
    setEditingId(null);
    setForm(blank);
    setImageFile(null);
    setPreview("");
  }

  return (
    <div>
      <header className="admin-topbar">
        <div>
          <span className="eyebrow">CRUD OPERATION</span>
          <h1>Services</h1>
          <p>Create, view, update and delete cleaning services.</p>
        </div>
      </header>

      <section className="crud-layout">
        <form className="admin-panel service-form" onSubmit={save}>
          <h2>{editingId ? "Edit service" : "Add service"}</h2>

          <label>
            Service Name
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Home Cleaning"
            />
          </label>

          <label>
            Category
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option>Residential</option>
              <option>Commercial</option>
              <option>Premium</option>
            </select>
          </label>

          <label>
            Service Picture
            <input
              type="file"
              accept="image/*"
              onChange={(e) => chooseImage(e.target.files?.[0])}
            />
          </label>

          {preview && (
            <div className="upload-preview">
              <img src={preview} alt="Service preview" />
            </div>
          )}

          <label>
            Description
            <textarea
              rows="4"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Describe the service..."
            />
          </label>

          <button className="button button-primary" type="submit">
            {editingId ? "Update Service" : "Create Service"}
          </button>

          {editingId && (
            <button type="button" className="button button-secondary" onClick={cancel}>
              Cancel
            </button>
          )}

          {status && <div className="success-note">{status}</div>}
        </form>

        <div className="admin-panel">
          <div className="panel-heading">
            <div>
              <h2>All services</h2>
              <p>{services.length} service(s)</p>
            </div>
          </div>

          <div className="service-table">
            {services.map((service) => (
              <div className="service-row image-service-row" key={service.id}>
                <div className="service-row-main">
                  {service.image_url ? (
                    <img src={service.image_url} alt={service.name} />
                  ) : (
                    <div className="service-row-placeholder">✦</div>
                  )}

                  <div>
                    <strong>{service.name}</strong>
                    <span>{service.category}</span>
                  </div>
                </div>

                <div className="row-actions">
                  <button onClick={() => edit(service)}>Edit</button>
                  <button className="danger" onClick={() => remove(service.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
