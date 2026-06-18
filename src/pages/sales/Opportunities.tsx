import { mockSales } from '../../lib/mockData';
import { Link } from 'react-router-dom';

export default function Opportunities() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Oportunități active</h3>
        <Link to="/sales" className="text-sm text-red-700">Înapoi</Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {mockSales.opportunities.map((op) => (
          <div key={op.name} className="rounded-3xl border border-red-100 bg-white p-4">
            <p className="font-semibold text-slate-950">{op.name}</p>
            <p className="text-sm text-slate-500">{op.stage}</p>
            <p className="mt-2 text-sm font-semibold text-red-700">{op.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
