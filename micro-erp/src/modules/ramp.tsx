import { Link } from 'react-router-dom';
import { Truck, Clock3, CalendarDays, Signal, AlertTriangle } from 'lucide-react';
import { mockRamp } from '../lib/mockData';

export function Ramp() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <CalendarDays className="h-6 w-6" />
            <h3 className="text-base font-semibold">Sloturi programate</h3>
          </div>
          <p className="mt-4 text-slate-600">Porți rezervate pentru încărcare și livrare.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockRamp.scheduledSlots}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Truck className="h-6 w-6" />
            <h3 className="text-base font-semibold">Încărcări active</h3>
          </div>
          <p className="mt-4 text-slate-600">Vehiculele programate curente în rampă.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockRamp.activeLoads}</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Clock3 className="h-6 w-6" />
            <h3 className="text-base font-semibold">Întârzieri</h3>
          </div>
          <p className="mt-4 text-slate-600">Cazuri critice ce necesită intervenție.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockRamp.delays}</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Operare rampă</h4>
            <p className="mt-2 text-sm text-slate-600">Acțiuni urgente pentru managementul porților.</p>
          </div>
          <Signal className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Verifică status porți</p>
            <p className="mt-2 text-sm text-slate-600">Celule cu blocaje și replanificări.</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Trimite alertă</button>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Confirmă încărcări</p>
            <p className="mt-2 text-sm text-slate-600">Verifică vehiculele din sloturile active.</p>
            <Link to="/ramp/slots" className="mt-4 inline-flex rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Vezi sloturi</Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Stare porți</h4>
            <p className="mt-2 text-sm text-slate-600">Status detaliat pentru fiecare poartă.</p>
          </div>
          <Signal className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 space-y-3">
          {mockRamp.gateStatus.map((slot) => (
            <div key={slot.gate} className="rounded-3xl bg-white p-4 border border-red-100 flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-slate-950">Poartă {slot.gate}</p>
                <p className="text-sm text-slate-500">{slot.state}</p>
              </div>
              <p className="text-sm text-red-700">{slot.eta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-slate-950">Lista operațională</h4>
        <div className="mt-5 space-y-3">
          {mockRamp.urgentActions.map((item) => (
            <div key={item.label} className="rounded-3xl bg-red-50 p-4 border border-red-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-950">{item.label}</p>
                <p className="text-sm text-slate-500">{item.status}</p>
              </div>
              <AlertTriangle className="h-5 w-5 text-red-700" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
