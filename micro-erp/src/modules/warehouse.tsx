import { Link } from 'react-router-dom';
import { MapPin, Box, PackageOpen, Truck } from 'lucide-react';
import { mockWarehouse } from '../lib/mockData';

export function Warehouse() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Box className="h-6 w-6" />
            <h3 className="text-base font-semibold">Acuratețe picking</h3>
          </div>
          <p className="mt-4 text-slate-600">Precizie scanare și livrare corectă.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockWarehouse.pickAccuracy}%</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <MapPin className="h-6 w-6" />
            <h3 className="text-base font-semibold">Locații active</h3>
          </div>
          <p className="mt-4 text-slate-600">Celule în uz și disponibile.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockWarehouse.activeLocations}</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <PackageOpen className="h-6 w-6" />
            <h3 className="text-base font-semibold">Retururi</h3>
          </div>
          <p className="mt-4 text-slate-600">Articole în carantină și procesare.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockWarehouse.returnsInQuarantine}</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Acțiuni depozit</h4>
            <p className="mt-2 text-sm text-slate-600">Sarcini active pentru echipa de depozit.</p>
          </div>
          <Truck className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Pick-uri urgente</p>
            <p className="mt-2 text-sm text-slate-600">{mockWarehouse.urgentPicks} comenzi cu livrare înainte de 16:00.</p>
            <Link to="/warehouse/picklist" className="mt-4 inline-flex rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Vezi picklist</Link>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Rezervare locație</p>
            <p className="mt-2 text-sm text-slate-600">Alocă celula pentru lotul de produs curent.</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Rezervă acum</button>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Flux inbound</h4>
            <p className="mt-2 text-sm text-slate-600">Verifică evenimentele de recepție și transfer.</p>
          </div>
          <MapPin className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 space-y-3">
          {mockWarehouse.inboundTasks.map((task) => (
            <div key={task.id} className="rounded-3xl bg-white p-4 border border-red-100 flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-950">{task.id}</p>
                <p className="text-sm text-slate-500">{task.type}</p>
              </div>
              <p className="text-sm text-red-700">{task.eta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Pick-uri outbound</h4>
            <p className="mt-2 text-sm text-slate-600">Comenzi ce trebuie expediate în următoarele ore.</p>
          </div>
          <PackageOpen className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-2">
          {mockWarehouse.outboundTasks.map((task) => (
            <div key={task.id} className="rounded-3xl bg-red-50 p-4 border border-red-100">
              <p className="font-semibold text-slate-950">{task.id}</p>
              <p className="mt-1 text-sm text-slate-500">Livrare până la {task.due}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
