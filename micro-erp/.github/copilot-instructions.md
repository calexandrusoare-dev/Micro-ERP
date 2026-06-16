# Context Global de Dezvoltare: Micro-ERP Omnichannel

Ești un inginer software expert specializat în React, TypeScript, Tailwind CSS și clientul JS Supabase. Sarcina ta este să generezi cod elegant, ultra-performant și adaptiv (Desktop/Mobil/PDA) pentru sistemul "Micro-ERP".

## 🧠 Filosofia Core: Poka-Yoke & Multi-Tenancy
1. TOATE tabelele și interogările sunt izolate prin coloana `company_id` utilizând Row Level Security (RLS) din Supabase.
2. Aplicația interzice erorile logice sau fizice (mecanisme anti-eroare Poka-Yoke) direct din interfață.
3. Sistemul este Dark Mode nativ, utilizând culori din gama Slate/Zinc pentru un consum redus de baterie pe terminalele mobile din fabrică și depozit[cite: 1].

## 📊 Structura Bazei de Date (Supabase / PostgreSQL)
Ori de câte ori generezi interogări sau tipuri TypeScript, bazează-te pe această structură relațională[cite: 1]:
- `public.user_roles`: id (PK, auth.uid()), company_id (FK), is_approved (BOOL), can_view (BOOL), can_edit (BOOL), can_delete (BOOL)[cite: 1].
- `public.orders`: id (UUID, PK), customer_name (TEXT), phone (VARCHAR), status (CARANTINA, READY_FOR_PLANNING, PAUZĂ_CLIENT, LIVRAT), source (VARCHAR), total_amount (NUMERIC), metadata (JSONB)[cite: 1].
- `public.order_items`: id (UUID, PK), order_id (FK), product_id (FK), fabric_id (FK), quantity (INT), price (NUMERIC)[cite: 1].
- `public.products`: id (UUID, PK), name (TEXT), sku (VARCHAR, UNIQUE), category (VARCHAR), base_recipe_id (UUID)[cite: 1].
- `public.materials`: id (UUID, PK), name (TEXT), unit (VARCHAR), safety_stock (NUMERIC), is_variable_by_fabric (BOOLEAN)[cite: 1].
- `public.material_batches`: id (UUID, PK), material_id (FK), batch_code (VARCHAR, UNIQUE), initial_qty (NUMERIC), current_qty (NUMERIC), location_code (VARCHAR)[cite: 1].
- `public.finished_goods_inventory`: id (UUID, PK), product_id (FK), location_code (VARCHAR), status (DISPONIBIL, REZERVAT, RETUR_DEFECT, RETUR_OK), order_id_reserved (UUID, NULLABLE)[cite: 1].
- `public.ramp_slots`: id (UUID, PK), gate_id (INT, 1-4), vehicle_plate (VARCHAR), estimated_duration_minutes (INT), start_time (TIMESTAMPTZ), status (SCHEDULED, LOADING, COMPLETED, DELAYED)[cite: 1].
- `public.driver_trips`: id (UUID, PK), driver_id (UUID), vehicle_plate (VARCHAR), cash_declared (NUMERIC), card_declared (NUMERIC), cash_reconciled (NUMERIC), status (ON_ROUTE, PENDING_RECONCILIATION, CLOSED)[cite: 1].

## 📱 Ghid de Implementare a Modulelor Funcționale

### Modulul 1: CRM, Showroom, Call Center & Scut Anti-Fraudă
- **Tableta Showroom:** Interfață tactilă desktop/tabletă. Preluare Suma Avans și Modalitate (Cash/Card/Integral)[cite: 1]. Generează o alertă vizuală către biroul de casierie pentru emiterea bonului fiscal sau a facturii[cite: 1]. *Poka-Yoke:* Blocare salvare comandă dacă nu se bifează confirmarea dimensiunilor fizice de către client[cite: 1].
- **Interfața Call Center:** Căutare rapidă (Shopify ID, Telefon, Nume). Management câmpuri obligatorii: `ORDER STATUS`, `ORDER CONFIRM`, `CALLED BY (ORDER CONFIRM)`, `MAX ESTIM PROD TERM`, `Order Notes`, `CALLED BY (Delivery)`, `DELIVERY CONFIRMATION DELIVERY`, `NOTES EARLIEST DELIVERY`, `LATEST DELIVERY`, `BANK TRANSFER`[cite: 1]. Statusul `PAUZĂ_CLIENT` (Stand_By) eliberează automat stocul alocat înapoi în stoc disponibil[cite: 1].
- **Carantină CRM:** Izolarea comenzilor cu erori structurale[cite: 1]. Butoane acțiune: Aprobă, Forțează Plată Online (link SMS/Email), Anulează[cite: 1].
- **Centralizator Vânzări & Alocare Stoc (FIFO):** Buton Verde ("Alocă din Stoc") dacă produsul există[cite: 1]. Buton Albastru ("Trimite în Producție") dacă stocul e 0[cite: 1]. Produsele cu `Factory pick up` trebuie să rezerve stocul ca plasă de siguranță și să permită programarea ridicării[cite: 1]. La scanarea din picking, trimite confirmare către Showroom și schimbă statusul în `Ready for pick up`[cite: 1].

### Modulul 2: Planificare Producție & Managementul Secțiilor
- **Panoul de Lansare și Lotizare:** Grupare automată comenzi după tipul de stofă / material[cite: 1]. Generează automat necesarul de materie primă[cite: 1].
- **Tableta Secție (Muncitori):** Schița produsului, versiunea de rețetă și ghid locație WMS[cite: 1]. Procentul de ajustare stoc se modifică dacă `is_variable_by_fabric` este true (potrivire dungă/model)[cite: 1]. *Poka-Yoke:* Obligație scanare cod bare rolă/lot stofă înainte de finalizare[cite: 1].

### Modulul 3: WMS & Managementul Depozitului (Picking-Heavy)
- **Gemenul Digital:** Hartă 2D interactivă cu starea celulelor de raft (Verde-Liber, Albastru-Ocupat stoc disponibil) și starea celor 4 porți de încărcare[cite: 1].
- **Aplicația PDA (Stivuitorist):** Trasee optime prin culoare pentru colectarea produselor (colectare per camion)[cite: 1]. *Poka-Yoke:* Scanare obligatorie cod locație raft + cod bare produs finit (identificarea unică a componentelor: pachet 1 tăblie, pachet 2 bază)[cite: 1]. Blocare tranzacție la nepotrivire[cite: 1].
- **Masa de Înfoliere Curier (Porțile 1 și 2):** Filtrare saltele drepte/tip bandă destinate Sameday/DPD[cite: 1]. Generare AWB via API extern la finalizarea ambalării[cite: 1].
- **Depozitare Retururi (Colțul stânga-jos hală):** Sortare coduri culori: Roșu (Defect tehnic - blocat pentru fabrică), Verde (Refuz livrare intact - reintrodus pe raft)[cite: 1]. Integrare cu funcția `deblocheaza_comanda_carantina()`[cite: 1].

### Modulul 4: Management Rampă, Porți & Sloturi Inteligente (ML)
- **Programator Sloturi (Gantt):** Vizualizare axă timp cele 4 porți[cite: 1]. Alocare dinamică lungime slot (+3 min per saltea înfoliată, +7 min per colțar pe baza volumului extras din picking)[cite: 1]. Suportă Drag & Drop[cite: 1].
- **Monitor TV Rampă:** Ecran industrial, numere mașini, bare de progres procentuale, countdown-uri, semaforizare Verde/Galben/Roșu[cite: 1].
- **Centru Algoritm ML:** Comutator activare predicții bazate pe istoricul real al ultimelor 20 de încărcări[cite: 1].

### Modulul 5: Flotă, Aplicație Șofer & Încasări Live (Borderou)
- **Aplicația Șoferului:** Rută ordonată cronologic, navigație, detalii livrare[cite: 1]. Declarare încasări: Livrat (Cash / Card POS / Online) sau Refuzat/Retur[cite: 1]. *Poka-Yoke:* La retur se cere motiv standardizat + poză doveditoare obligatorie a stării produsului[cite: 1].
- **Reconciliere Financiară (Casierie):** Potrivire digitală directă seară între sumele declarate de șofer și cash-ul fizic[cite: 1]. Sistemul se colorează în verde și descarcă gestiunea doar la diferență egală cu ZERO[cite: 1].

### Dashboard Strategic de Management
- **Pilon Sezonalitate:** Grafic predictiv bazat pe vederea SQL `view_dashboard_sezonalitate_kpi`. Suprapune vânzările istorice de vârf cu viteza curentă a stocului disponibil pentru alerte de deficit[cite: 1].
- **Pilon Financiar:** Matrice lichidități live (Avansuri, Încasări online, Cash pe drum în mașini, Casierie) + costul retururilor active[cite: 1].
- **Pilon Operațional:** Sănătate algoritm ML (procent potrivire sloturi) și Lead Time total (CRM -> Livrare)[cite: 1].

## 🧪 Reguli de Generare Cod
- Scrie componente funcționale React curate cu TypeScript (declară interfețele corect)[cite: 1].
- Folosește clasele utilitare Tailwind CSS pentru design complet adaptiv (clauze `md:`, `lg:` și elemente mari accesibile tactil pe `wms` sau `driver`)[cite: 1].
- Implementează stările de încărcare și eroare pentru interacțiunile cu baza de date Supabase[cite: 1].
- Când modifici datele, apelează funcțiile RPC securizate și helperii de context (`get_my_company_id()`, `current_user_can_edit()`)[cite: 1].
