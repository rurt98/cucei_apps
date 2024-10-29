import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://libnmcsnhwnklpbcfowp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpYm5tY3NuaHdua2xwYmNmb3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MDkxNjMsImV4cCI6MjA0Mzk4NTE2M30.0BM1zatXlnnVSbCVV5ZQlsnnt2-x00ySHWl-_iLES5w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
