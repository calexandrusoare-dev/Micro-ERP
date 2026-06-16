import { mockProduction } from '../../lib/mockData';
import { Link } from 'react-router-dom';

export default function Batches() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Batch-uri în producție</h3>
        <Link to="/production" className="text-sm text-red-700">Înapoi</Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {mockProduction.batches.map((b) => (
          <div key={b.code} className="rounded-3xl border border-red-100 bg-white p-4">
            <p className="font-semibold text-slate-950">{b.code}</p>
            <p className="text-sm text-slate-500">{b.status}</p>
            <p className="mt-2 text-sm font-semibold text-red-700">Due: {b.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
