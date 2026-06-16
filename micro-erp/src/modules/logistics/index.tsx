import { Map, CheckCircle2, Truck, AlertTriangle } from 'lucide-react';
import { mockLogistics } from '../../lib/mockData';
import { Link } from 'react-router-dom';

export function Logistics() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Map className="h-6 w-6" />
            <h3 className="text-base font-semibold">Rute active</h3>
          </div>
          <p className="mt-4 text-slate-600">Livrări planificate în curs.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockLogistics.activeRoutes}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Truck className="h-6 w-6" />
            <h3 className="text-base font-semibold">Vehicule încărcate</h3>
          </div>
          <p className="mt-4 text-slate-600">Camioane gata de ieșire.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockLogistics.loadedVehicles}</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <CheckCircle2 className="h-6 w-6" />
            <h3 className="text-base font-semibold">On-time rate</h3>
          </div>
          <p className="mt-4 text-slate-600">Procent rutelor livrate conform ETA.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{Math.round(mockLogistics.onTimeRate * 100)}%</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Incidente în transport</h4>
            <p className="mt-2 text-sm text-slate-600">Monitorizează rutele cu devieri și întârzieri.</p>
          </div>
          <AlertTriangle className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 space-y-4">
          {mockLogistics.incidents.map((incident) => (
            <div key={incident.route} className="rounded-3xl bg-red-50 p-4 border border-red-100">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-950">{incident.route}</p>
                  <p className="mt-1 text-sm text-slate-600">{incident.issue}</p>
                </div>
                <p className="text-sm font-semibold text-red-700">{incident.eta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Task-uri logistice</h4>
            <p className="mt-2 text-sm text-slate-600">Prioritizează încărcările și foi de parcurs.</p>
          </div>
          <Truck className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {['Revizuiește foi de parcurs', 'Confirmă ETA clienți', 'Verifică stocuri încărcare'].map((task) => (
            <div key={task} className="rounded-3xl bg-white p-4 border border-red-100 text-sm font-semibold text-slate-950">{task}</div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/logistics/incidents" className="inline-flex mt-4 rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white">Vezi incidente</Link>
        </div>
      </section>
    </div>
  );
}
