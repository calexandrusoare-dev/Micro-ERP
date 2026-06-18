# Micro-ERP

Micro-ERP este o aplicație React + TypeScript + Vite construită pentru module operaționale: CRM, Planificare, WMS, Rampă, Flotă, Sales, Production și Logistics.

## Structura proiectului

- `src/` - codul aplicației React
- `src/context/AuthContext.tsx` - autentificare și integrare Supabase
- `src/lib/supabaseClient.ts` - client Supabase configurat din variabile de mediu
- `src/lib/mockData.ts` - mock data pentru pagini și module
- `src/modules/` - modulele principale ale ERP-ului
- `src/pages/` - pagini detaliate pentru fluxuri funcționale
- `scripts/` - scripturi de seed și generare date

## Cerințe

- Node.js 20+ (recomandat)
- npm
- Supabase project (opțional, dar recomandat pentru autentificare și date reale)

## Setup local

```bash
cd micro-erp
npm install
```

### Pornire aplicație

```bash
npm run dev
```

### Build producție

```bash
npm run build
```

### Rularea lint

```bash
npm run lint
```

## Configurare Supabase

Creează un proiect Supabase și adaugă fișierul `.env` în `micro-erp/` cu variabilele:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_SERVICE_ROLE=your-service-role-key
```

> Nu comite niciodată `.env` în Git.

### Template `.env.example`

Am adăugat deja `micro-erp/.env.example` cu variabilele necesare. Copiază-l în `.env` și completează valorile reale.

## Seed Supabase

Pentru a popula tabela `profiles` și a testa autentificarea, folosește scriptul de seed.

```bash
cd micro-erp
npm run seed:supabase
```

### Notă de securitate

- `VITE_SUPABASE_SERVICE_ROLE` trebuie folosit doar în mediul local sau pe server pentru scripturi de seed.
- Nu folosi `SERVICE_ROLE` în client-side.

## Fluxul de autentificare

- `AuthContext` folosește `supabase.auth.getSession()` și `supabase.auth.signInWithPassword(...)`
- Dacă tabela `profiles` nu există, folosește un fallback pe `user_roles`
- Dacă Supabase nu este disponibil, aplicația folosește un fallback mock simplu pentru demo

## Tabele așteptate

Aplicația este construită pentru modelul următor:

- `profiles` - id, email, role, full_name
- `user_roles` - id, can_view, can_edit, can_delete
- `orders`, `order_items`, `products`, `materials`, `material_batches`, `finished_goods_inventory`, `ramp_slots`, `driver_trips`

## Autentificare demo

Pentru test rapid fără Supabase real, poți folosi:

- `admin@demo` / `admin`
- `operator@demo` / `admin`

Admin routes (`/admin`, `/settings`) sunt accesibile doar pentru `admin`.

## Comenzi utile

```bash
# rulează aplicația local
npm run dev

# build producție
npm run build

# seed mock local
npm run seed

# seed Supabase real
npm run seed:supabase
```

## Suplimentar

- Dacă vrei să adaugi reguli RLS, configurează `company_id` în tabele și folosește `auth.jwt().company_id` în polițele Supabase.
- Folosește `micro-erp/src/lib/supabaseClient.ts` pentru a centraliza conexiunea la Supabase.
- Actualizează `micro-erp/src/App.tsx` și `src/context/AuthContext.tsx` dacă vrei să faci tranziția completă la date reale din Supabase.

