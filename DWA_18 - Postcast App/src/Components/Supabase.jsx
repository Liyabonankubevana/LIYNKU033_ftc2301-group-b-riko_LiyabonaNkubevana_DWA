import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aiqvwrhhlwbnphhqssgq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpcXZ3cmhobHdibnBoaHFzc2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNjEwNjAsImV4cCI6MjAwNDkzNzA2MH0.DgLgDqocq-sxtgJHt6HCEZcXVeydzOHYAjHNMHkSBHA'
export const supabase = createClient(supabaseUrl, supabaseKey)