import SimpleLineChart from '../../components/SimpleLineChart';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-950">Dashboard - KPI Globale</h1>
      <p className="text-sm text-slate-600">Profitabilitate și grafice manageriale</p>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase text-slate-400">Comenzi azi</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">342</p>
            </div>
            <div className="w-28 h-8">
              <SimpleLineChart />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase text-slate-400">Acuratețe pick</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">89%</p>
            </div>
            <div className="w-28 h-8">
              <SimpleLineChart />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-red-50 p-6 border border-red-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase text-slate-400">Livrări la timp</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">94%</p>
            </div>
            <div className="w-28 h-8">
              <SimpleLineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
