import { Truck, Wallet, Smile, Clock3, CheckCircle2 } from 'lucide-react';
import { mockFleet } from '../lib/mockData';

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
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockFleet.activeRoutes}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Wallet className="h-6 w-6" />
            <h3 className="text-base font-semibold">Încasări live</h3>
          </div>
          <p className="mt-4 text-slate-600">Valoare colectată în timp real.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockFleet.liveCollectionsPct}%</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Smile className="h-6 w-6" />
            <h3 className="text-base font-semibold">Casierie</h3>
          </div>
          <p className="mt-4 text-slate-600">Starea reconcilerii și diferențelor.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockFleet.cashDiscrepancies}</p>
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
          {mockFleet.drivers.map((driver) => (
            <div key={driver.name} className="rounded-3xl bg-red-50 p-4 border border-red-100">
              <p className="font-semibold text-slate-950">{driver.name}</p>
              <p className="mt-2 text-sm text-slate-600">{driver.status}</p>
              <p className="mt-3 text-sm font-semibold text-red-700">Progres {driver.progress}%</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Reconciliere</h4>
            <p className="mt-2 text-sm text-slate-600">Verifică discrepanțele cash și aplicație.</p>
          </div>
          <CheckCircle2 className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 space-y-3">
          {mockFleet.reconcileTasks.map((item) => (
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

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Acțiuni rapide</h4>
            <p className="mt-2 text-sm text-slate-600">Prioritizează șoferii cu întârziere sau diferențe de cash.</p>
          </div>
          <Truck className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-2">
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Actualizează ruta pentru Andreea</p>
            <p className="mt-1 text-sm text-slate-500">Adaugă scoring prioritar pentru livrare.</p>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Verifică diferența cash</p>
            <p className="mt-1 text-sm text-slate-500">Raport pentru șoferii cu discrepanțe.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
