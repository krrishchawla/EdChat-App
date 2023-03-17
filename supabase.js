import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://dcxlcagwipjfszoqcluo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjeGxjYWd3aXBqZnN6b3FjbHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1NzYyNjMsImV4cCI6MTk5NDE1MjI2M30.uwCjlTwmea1eWJuky1F1S-EViNyzDnCXQ7Q-OGl6RlY';

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    }
});