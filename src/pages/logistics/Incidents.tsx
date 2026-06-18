import { mockLogistics } from '../../lib/mockData';
import { Link } from 'react-router-dom';

export default function Incidents() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Incidente transport</h3>
        <Link to="/logistics" className="text-sm text-red-700">Înapoi</Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {mockLogistics.incidents.map((i) => (
          <div key={i.route} className="rounded-3xl border border-red-100 bg-white p-4">
            <p className="font-semibold text-slate-950">{i.route}</p>
            <p className="text-sm text-slate-500">{i.issue}</p>
            <p className="mt-2 text-sm font-semibold text-red-700">ETA: {i.eta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
