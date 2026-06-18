import { DollarSign, Briefcase, BarChart3, ClipboardList, Award } from 'lucide-react';
import { mockSales } from '../../lib/mockData';
import { Link } from 'react-router-dom';

export function Sales() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <Briefcase className="h-6 w-6" />
            <h3 className="text-base font-semibold">Deal-uri active</h3>
          </div>
          <p className="mt-4 text-slate-600">Oportunități în pipeline în faza curentă.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockSales.activeDeals}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <DollarSign className="h-6 w-6" />
            <h3 className="text-base font-semibold">Valoare pipeline</h3>
          </div>
          <p className="mt-4 text-slate-600">Sumă estimată pentru oportunități active.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{mockSales.pipelineValue}</p>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-3 text-red-700">
            <BarChart3 className="h-6 w-6" />
            <h3 className="text-base font-semibold">Rată win</h3>
          </div>
          <p className="mt-4 text-slate-600">Procent din pipeline care se transformă în vânzare.</p>
          <p className="mt-5 text-3xl font-semibold text-slate-950">{Math.round(mockSales.winRate * 100)}%</p>
        </div>
      </div>

      <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Oportunități prioritare</h4>
            <p className="mt-2 text-sm text-slate-600">Urmărește stagiile critice din pipeline.</p>
          </div>
          <ClipboardList className="h-6 w-6 text-red-700" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {mockSales.opportunities.map((opportunity) => (
            <div key={opportunity.name} className="rounded-3xl bg-red-50 p-4 border border-red-100">
              <p className="font-semibold text-slate-950">{opportunity.name}</p>
              <p className="mt-2 text-sm text-slate-600">{opportunity.stage}</p>
              <p className="mt-3 text-sm font-semibold text-red-700">{opportunity.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-lg font-semibold text-slate-950">Acțiuni de vânzări</h4>
            <p className="mt-2 text-sm text-slate-600">Decizii rapide pentru reducerea timpului de închidere.</p>
          </div>
          <Award className="h-6 w-6 text-red-700" />
        </div>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {['Contactează client cheie', 'Trimite ofertă actualizată', 'Confirmă termenul de livrare'].map((task) => (
            <div key={task} className="rounded-3xl bg-white p-4 border border-red-100 text-sm font-semibold text-slate-950">{task}</div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/sales/opportunities" className="inline-flex mt-4 rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white">Vezi oportunități</Link>
        </div>
      </section>
    </div>
  );
}
