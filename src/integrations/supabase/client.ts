// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://zrwdpntbrmnkoietmfxa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpyd2RwbnRicm1ua29pZXRtZnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3Mjk4MTAsImV4cCI6MjA0MTMwNTgxMH0.Av1jR6HI4FeORtX7l_XiHfidlJbz1GgZPqHd5amWL-c";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);