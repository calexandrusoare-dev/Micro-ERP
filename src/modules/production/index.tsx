import { Layers, Activity, CheckCircle2, Clock3 } from 'lucide-react';
import { mockProduction } from '../../lib/mockData';
import { Link } from 'react-router-dom';

export function Production() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Layers className="h-6 w-6" />
            <h3 className="text-base font-semibold">Linii active</h3>
          </div>
          <p className="mt-4 text-slate-600">Număr de linii de producție în lucru.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockProduction.activeLines}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Activity className="h-6 w-6" />
            <h3 className="text-base font-semibold">Capacitate utilizată</h3>
          </div>
          <p className="mt-4 text-slate-600">Performanță generală față de plan.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{Math.round(mockProduction.throughputPct * 100)}%</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <CheckCircle2 className="h-6 w-6" />
            <h3 className="text-base font-semibold">Batch-uri completate</h3>
          </div>
          <p className="mt-4 text-slate-600">Batches finalizate în perioada curentă.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockProduction.completedBatches}</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Batch-uri în producție</h4>
            <p className="mt-2 text-sm text-slate-600">Monitorizează starea fiecărui lot și ETA.</p>
          </div>
          <Clock3 className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {mockProduction.batches.map((batch) => (
            <div key={batch.code} className="rounded-3xl bg-red-50 p-4 border border-red-100">
              <p className="font-semibold text-slate-950">{batch.code}</p>
              <p className="text-sm text-slate-500">{batch.status}</p>
              <p className="mt-2 text-sm font-semibold text-red-700">Livrare {batch.due}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Priorități producție</h4>
            <p className="mt-2 text-sm text-slate-600">Acțiuni pentru evitarea blocajelor și întârzierilor.</p>
          </div>
          <Layers className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {['Alocă materiale critice', 'Verifică finisajele VIP', 'Confirmă ambalare finală'].map((task) => (
            <div key={task} className="rounded-3xl bg-white p-4 border border-red-100 text-sm font-semibold text-slate-950">{task}</div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/production/batches" className="inline-flex mt-4 rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white">Vezi batch-uri</Link>
        </div>
      </section>
    </div>
  );
}
