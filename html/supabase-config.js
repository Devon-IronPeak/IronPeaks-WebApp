// Supabase Configuration
// Replace these with your actual Supabase project credentials from:
// Project Settings → API in your Supabase dashboard

const SUPABASE_URL = 'https://yecqupxvbazsgzqgmzmc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllY3F1cHh2YmF6c2d6cWdtem1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MzU4NDcsImV4cCI6MjA4NjAxMTg0N30._8MxQKOgs-IeezPUTumvHPaFDj1n4R-TYOFv-eXuBZk';

// Initialize Supabase client
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
