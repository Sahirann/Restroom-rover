import {createClient} from "@supabase/supabase-js"

const supabaseUrl ='https://iqzrfujkwqdtypeuanlr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxenJmdWprd3FkdHlwZXVhbmxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNjEwMDEsImV4cCI6MjAxMTkzNzAwMX0.0wyXBDAoThj96-_OsaR9-KOnnMVu27OKLRXtyGbjkEc';
export const supabase = createClient(supabaseUrl,supabaseAnonKey);