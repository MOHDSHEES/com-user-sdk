// src/auth/supabase.js
export let supabaseClient = null;

export function initSupabaseAuth(client) {
  supabaseClient = client;
}

export async function signUpEmailPassword(
  email,
  password,
  metadata = {},
  redirectTo
) {
  if (!supabaseClient) throw new Error("Supabase client not initialized");
  return supabaseClient.auth.signUp({
    email,
    password,
    options: { data: metadata, emailRedirectTo: redirectTo },
  });
}

export async function signInEmailPassword(email, password) {
  if (!supabaseClient) throw new Error("Supabase client not initialized");
  return supabaseClient.auth.signInWithPassword({ email, password });
}

export async function signOut() {
  if (!supabaseClient) throw new Error("Supabase client not initialized");
  return supabaseClient.auth.signOut();
}

export async function getUser() {
  //   console.log(supabaseClient);

  if (!supabaseClient) throw new Error("Supabase client not initialized");
  return supabaseClient.auth.getUser();
}
