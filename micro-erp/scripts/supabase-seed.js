import { createClient } from '@supabase/supabase-js';

const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const key = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error('Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.');
  process.exit(1);
}

const supabase = createClient(url, key);

async function seed() {
  try {
    // create demo users and profiles
    const users = [
      { id: 'u1', email: 'admin@demo', role: 'admin', name: 'Admin Demo' },
      { id: 'u2', email: 'operator@demo', role: 'operator', name: 'Operator Demo' },
    ];

    for (const u of users) {
      // upsert profile
      const { error } = await supabase.from('profiles').upsert({ id: u.id, email: u.email, role: u.role, full_name: u.name });
      if (error) console.warn('Profile upsert error', u.email, error.message);
    }

    console.log('Seed completed. Please ensure auth users exist in Supabase Auth matching profile ids if you want password login.');
  } catch (err) {
    console.error('Seed failed', err);
    process.exit(1);
  }
}

seed();
