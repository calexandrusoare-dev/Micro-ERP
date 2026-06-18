import { ShieldCheck, Users2, FileText, Bell } from 'lucide-react';

export function Admin() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Users2 className="h-6 w-6" />
            <h3 className="text-base font-semibold">Utilizatori activi</h3>
          </div>
          <p className="mt-4 text-slate-600">Număr conturi cu acces administrativ.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">24</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <ShieldCheck className="h-6 w-6" />
            <h3 className="text-base font-semibold">Securitate</h3>
          </div>
          <p className="mt-4 text-slate-600">Stare acțiuni pentru audit și reguli de acces.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">OK</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <FileText className="h-6 w-6" />
            <h3 className="text-base font-semibold">Audit Log</h3>
          </div>
          <p className="mt-4 text-slate-600">Ultimele modificări și autentificări.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">18</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Control Admin</h4>
            <p className="mt-2 text-sm text-slate-600">Fluxuri centralizate pentru administrator.</p>
          </div>
          <Bell className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Roluri și permisiuni</p>
            <p className="mt-2 text-sm text-slate-600">Actualizează accesul echipei de vânzări.</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Gestionează</button>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Audit & rapoarte</p>
            <p className="mt-2 text-sm text-slate-600">Verifică ultimele modificări din sistem.</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Vizualizează</button>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Alerta sistem</p>
            <p className="mt-2 text-sm text-slate-600">Incident critic sau actualizare necesară.</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Trimite</button>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Acțiuni rapide</h4>
            <p className="mt-2 text-sm text-slate-600">Elemente rapide pentru siguranță și acces.</p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-700 border border-red-100">Admin</span>
        </div>

        <div className="mt-6 space-y-3">
          {[
            { title: 'Revizuiește utilizatorii noui', detail: '3 conturi în așteptare' },
            { title: 'Verifică permisiunile proiectului', detail: 'Echipa logistică are acces corect' },
            { title: 'Actualizează politica MFA', detail: 'Recomandat pentru securitate' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-4 border border-red-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-950">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
              </div>
              <button className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Execută</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
