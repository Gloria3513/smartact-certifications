import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const isConfigured = supabaseUrl.length > 0 && supabaseAnonKey.length > 0;

export const supabase: SupabaseClient | null = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export type CertificationProgram = {
  id: string;
  slug: string;
  step_number: number;
  step_label: string;
  title: string;
  subtitle: string | null;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  necessity: string[];
  necessity_title: string;
  necessity_conclusion: string;
  perspectives: string[] | null;
  roles: { title: string; items: string[] }[] | null;
  competencies: { title: string; items: string[] }[] | null;
  contents: string[];
  growth: string[];
  fields: string[];
  price: number | null;
  duration_weeks: number | null;
  is_active: boolean;
  sort_order: number;
};

export type CertificationCurriculum = {
  id: string;
  program_id: string;
  session_number: number;
  title: string;
  description: string | null;
  learning_objectives: string[] | null;
  activities: string[] | null;
  materials: string[] | null;
  duration_minutes: number;
};

export async function getCertificationPrograms(): Promise<CertificationProgram[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("certification_programs")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  if (error) {
    console.error("Failed to fetch certifications:", error);
    return [];
  }
  return data;
}

export async function getCertificationBySlug(
  slug: string
): Promise<CertificationProgram | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("certification_programs")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Failed to fetch certification:", error);
    return null;
  }
  return data;
}

export async function getCurriculum(
  programId: string
): Promise<CertificationCurriculum[]> {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("certification_curriculum")
    .select("*")
    .eq("program_id", programId)
    .eq("is_active", true)
    .order("session_number");

  if (error) {
    console.error("Failed to fetch curriculum:", error);
    return [];
  }
  return data;
}

export async function submitInquiry(inquiry: {
  program_id: string | null;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  message?: string;
  inquiry_type?: "individual" | "group" | "corporate";
}) {
  if (!supabase) throw new Error("Supabase not configured");

  const { data, error } = await supabase
    .from("certification_inquiries")
    .insert({ ...inquiry, source: "website" })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
