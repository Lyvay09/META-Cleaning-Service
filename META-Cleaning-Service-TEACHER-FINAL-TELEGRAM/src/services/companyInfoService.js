import { supabase } from "./supabase";

export async function getCompanyInfo() {
  const { data, error } = await supabase
    .from("company_info")
    .select("*")
    .limit(1)
    .single();

  if (error) throw error;

  return data;
}

export async function updateCompanyInfo(id, info) {
  const { data, error } = await supabase
    .from("company_info")
    .update({
      phone: info.phone,
      email: info.email,
      facebook: info.facebook,
      address: info.address,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}