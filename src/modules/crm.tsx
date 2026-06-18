import { Link } from 'react-router-dom';
import { ShieldAlert, Users2, TrendingUp, Flag, PhoneIncoming } from 'lucide-react';
import { mockCRM } from '../lib/mockData';

export function CRM() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Users2 className="h-6 w-6" />
            <h3 className="text-base font-semibold">Lead-uri active</h3>
          </div>
          <p className="mt-4 text-slate-600">Contacte noi din showroom, ecommerce și call center.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockCRM.leads}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <ShieldAlert className="h-6 w-6" />
            <h3 className="text-base font-semibold">Cazuri fraudă</h3>
          </div>
          <p className="mt-4 text-slate-600">Comenzi blocate automat pentru verificare.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockCRM.fraudCases}</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <TrendingUp className="h-6 w-6" />
            <h3 className="text-base font-semibold">Conversii</h3>
          </div>
          <p className="mt-4 text-slate-600">Raport rapid de conversie pentru comenzile procesate.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{Math.round(mockCRM.conversions * 100)}%</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Operațiuni CRM</h4>
            <p className="mt-2 text-sm text-slate-600">Sarcini active pe call center și carantină.</p>
          </div>
          <Flag className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Carantină</p>
            <p className="mt-2 text-sm text-slate-600">{mockCRM.quarantine} comenzi în verificare.</p>
            <Link to="/crm/quarantine" className="mt-4 inline-flex rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Vezi carantină</Link>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Call Center</p>
            <p className="mt-2 text-sm text-slate-600">{mockCRM.openTickets} ticketuri deschise.</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Deschide flux</button>
          </div>
          <div className="rounded-3xl bg-red-50 p-4 border border-red-100">
            <p className="font-semibold text-slate-950">Alerta fraudă</p>
            <p className="mt-2 text-sm text-slate-600">Sisteme analiză rulează constant.</p>
            <button className="mt-4 rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Revizuiește</button>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Instrucțiuni operaționale</h4>
            <p className="mt-2 text-sm text-slate-600">Execuții rapide pentru echipa de vânzări și fraudă.</p>
          </div>
          <PhoneIncoming className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 space-y-3">
          {[
            { title: 'Verifică comanda #A401', subtitle: 'Plată suspectă - acțiune necesară' },
            { title: 'Contactează șoferul pentru 24h livrare', subtitle: 'Confirmă ruta și ora încărcării' },
          ].map((task) => (
            <div key={task.title} className="rounded-3xl bg-white p-4 border border-red-100">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-950">{task.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{task.subtitle}</p>
                </div>
                <button className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-200">Execută</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
