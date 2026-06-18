import { SlidersHorizontal, Globe2, CreditCard, Sparkles } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <SlidersHorizontal className="h-6 w-6" />
            <h3 className="text-base font-semibold">Configurații sistem</h3>
          </div>
          <p className="mt-4 text-slate-600">Setări de business și parametri generali.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">23</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Globe2 className="h-6 w-6" />
            <h3 className="text-base font-semibold">Multilimbă</h3>
          </div>
          <p className="mt-4 text-slate-600">Limba și localizare activă pentru interfață.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">RO</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <CreditCard className="h-6 w-6" />
            <h3 className="text-base font-semibold">Facturare</h3>
          </div>
          <p className="mt-4 text-slate-600">Setări cont financiar și integrări plăți.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">Active</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Setări rapide</h4>
            <p className="mt-2 text-sm text-slate-600">Parametri cheie pentru operațiuni și UI.</p>
          </div>
          <Sparkles className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Mod operare</p>
            <p className="mt-2 text-sm text-slate-600">Live / Simulare</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Schimbă</button>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Notificări</p>
            <p className="mt-2 text-sm text-slate-600">Activare alerte email/SMS.</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Configurează</button>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Backup</p>
            <p className="mt-2 text-sm text-slate-600">Programare export date.</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Planifică</button>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Setări avansate</h4>
            <p className="mt-2 text-sm text-slate-600">Gestionare API, integrare ERP și roluri.</p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-700 border border-red-100">Setări</span>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { title: 'Actualizează conectivitatea ERP', subtitle: 'Verifică setările și cheile API' },
            { title: 'Gestionează roluri de aplicație', subtitle: 'Admin, Logistică, Producție' },
            { title: 'Rulează test securitate', subtitle: 'Последная verificare de acces' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-4 border border-red-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-950">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
              </div>
              <button className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Deschide</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
