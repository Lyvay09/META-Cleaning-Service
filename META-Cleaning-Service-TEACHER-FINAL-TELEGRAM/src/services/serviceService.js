import { supabase } from "./supabase";

const fallbackServices = [
  { id: 1, name: "High-Level Glass & Alucobond Cleaning", category: "Building Exterior", description: "Specialized high-level cleaning for glass façades and Alucobond surfaces.", image_url: "/assets/company-10.jpg", featured: true },
  { id: 2, name: "High-Level Iron Net Cleaning", category: "Building Exterior", description: "High-level cleaning and maintenance for iron net and exterior structures.", image_url: "/assets/company-01.jpg", featured: true },
  { id: 3, name: "Wall Cleaning", category: "Building Exterior", description: "Professional exterior wall cleaning for commercial and residential buildings.", image_url: "/assets/company-02.jpg", featured: true },
  { id: 4, name: "Resilicon & Silicone Repairing", category: "Repair & Maintenance", description: "Repairing and maintaining silicone and exterior joints on building surfaces.", image_url: "/assets/company-03.jpg", featured: true },
  { id: 5, name: "Wall Cracks Repairing & Repainting", category: "Repair & Maintenance", description: "Exterior crack repair and repainting services for building walls.", image_url: "/assets/company-09.jpg", featured: true },
  { id: 6, name: "General Deep Cleaning Service", category: "Cleaning Service", description: "Deep cleaning for spaces that need detailed and careful treatment.", image_url: "/assets/company-07.jpg", featured: true },
  { id: 7, name: "High-Level Maintaining Service", category: "Maintenance", description: "High-level building maintenance support for exterior surfaces.", image_url: "/assets/company-08.jpg", featured: true },
];

export async function getServices() {
  if (!supabase) return fallbackServices;
  const { data, error } = await supabase.from("services").select("*").order("id");
  if (error) throw error;
  return data ?? [];
}

export async function uploadServiceImage(file) {
  if (!supabase) return URL.createObjectURL(file);

  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
  const path = `${Date.now()}-${safeName}`;

  const { error } = await supabase.storage
    .from("service-images")
    .upload(path, file, { cacheControl: "3600", upsert: false });

  if (error) throw error;

  const { data } = supabase.storage.from("service-images").getPublicUrl(path);
  return data.publicUrl;
}

export async function createService(service) {
  if (!supabase) return { ...service, id: Date.now() };
  const { data, error } = await supabase.from("services").insert([service]).select().single();
  if (error) throw error;
  return data;
}

export async function updateService(id, service) {
  if (!supabase) return { ...service, id };
  const { data, error } = await supabase.from("services").update(service).eq("id", id).select().single();
  if (error) throw error;
  return data;
}

export async function deleteService(id) {
  if (!supabase) return true;
  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw error;
  return true;
}
