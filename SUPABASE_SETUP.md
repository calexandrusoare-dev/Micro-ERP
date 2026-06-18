# Supabase Setup (Micro-ERP)

Pași rapizi pentru a configura Supabase local/prod pentru Micro-ERP:

1. Creează un proiect Supabase.
2. Adaugă următoarele variabile de mediu în `.env` la root-ul `micro-erp`:

VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_SERVICE_ROLE=your-service-role-key (doar pentru scripturi de seed, nu în client)

3. Configurează RLS și tabelul `profiles`:
- Rule: `company_id` folosit pentru izolare multi-tenant.
- Exemplu schemă `profiles`: `id uuid primary key`, `company_id uuid`, `role text` (admin|operator|viewer).

4. Seed (local):
- Configurează `VITE_SUPABASE_SERVICE_ROLE` în mediu pentru a rula `scripts/supabase-seed.js`.
- Rulare:

```bash
# din folder micro-erp
node scripts/supabase-seed.js
```

5. RPC & Security
- Folosește funcții RPC (proceduri stocate) pentru operațiuni critice (alocare stoc, rezervări).
- Aplică RLS per tabel: `company_id = auth.jwt().company_id` sau utilizatorul trebuie mapat la companie în `profiles`.

6. Notes
- Nu folosi `SERVICE_ROLE` în client-side.
- Pentru dezvoltare locală poți folosi `supabase start` (CLI) și configura variabilele în `.env`.

---
Documentația este minimă și poate fi extinsă cu exemple SQL/Policies la cerere.
