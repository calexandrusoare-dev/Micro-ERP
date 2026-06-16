import { Activity, CalendarDays, Layers, Clock3, ClipboardCheck } from 'lucide-react';
import { mockPlanning } from '../lib/mockData';

export function Planning() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <CalendarDays className="h-6 w-6" />
            <h3 className="text-base font-semibold">Loturi active</h3>
          </div>
          <p className="mt-4 text-slate-600">Producția planificată pentru astăzi.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockPlanning.activeLots}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Layers className="h-6 w-6" />
            <h3 className="text-base font-semibold">Materiale critice</h3>
          </div>
          <p className="mt-4 text-slate-600">Disponibilitate stoc pentru secțiile active.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockPlanning.criticalMaterials}</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Activity className="h-6 w-6" />
            <h3 className="text-base font-semibold">Flux secție</h3>
          </div>
          <p className="mt-4 text-slate-600">Respectare plan de execuție și termene.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{Math.round(mockPlanning.lineFlowPct * 100)}%</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Operare producție</h4>
            <p className="mt-2 text-sm text-slate-600">Sarcini active de lansare și control secție.</p>
          </div>
          <ClipboardCheck className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 space-y-4">
          {mockPlanning.tasks.map((item) => (
            <div key={item.title} className="rounded-3xl bg-red-50 p-4 border border-red-100">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.status}</p>
                </div>
                <button className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Detalii</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Agenda operațională</h4>
            <p className="mt-2 text-sm text-slate-600">Acțiuni rapide pentru optimizarea producției.</p>
          </div>
          <Clock3 className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {['Blochează materiale critice', 'Replanifică secția', 'Trimite raport secție'].map((label) => (
            <div key={label} className="rounded-3xl bg-white p-4 border border-red-100 text-sm font-semibold text-red-900">{label}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
