import { Truck, Wallet, Smile, Clock3, CheckCircle2 } from 'lucide-react';

export function Fleet() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Truck className="h-6 w-6" />
            <h3 className="text-base font-semibold">Rute active</h3>
          </div>
          <p className="mt-4 text-slate-600">Numărul de vehicule în livrare acum.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">12</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Wallet className="h-6 w-6" />
            <h3 className="text-base font-semibold">Încasări live</h3>
          </div>
          <p className="mt-4 text-slate-600">Valoare colectată în timp real.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">94%</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Smile className="h-6 w-6" />
            <h3 className="text-base font-semibold">Casierie</h3>
          </div>
          <p className="mt-4 text-slate-600">Starea reconcilerii și diferențelor.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">3</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Operațiuni flotă</h4>
            <p className="mt-2 text-sm text-slate-600">Sarcini în teren și confirmări live.</p>
          </div>
          <Clock3 className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Șofer Mihai</p>
            <p className="mt-2 text-sm text-slate-600">Livrare în curs</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Verifică</button>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Șofer Andreea</p>
            <p className="mt-2 text-sm text-slate-600">Încarcare</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Actualizează</button>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Cashier review</p>
            <p className="mt-2 text-sm text-slate-600">Diferențe sub 5%</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Reconcilează</button>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Flux operațional</h4>
            <p className="mt-2 text-sm text-slate-600">Decizii rapide pentru cash și șoferi.</p>
          </div>
          <CheckCircle2 className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-5 space-y-3">
          {[
            { title: 'Confirmă încasare Șofer 1', subtitle: 'Cash vs. aplicație' },
            { title: 'Trimite update rută', subtitle: 'Șofer Andreea are întârziere' },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-4 border border-red-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-950">{item.title}</p>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
              <button className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Acționează</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
