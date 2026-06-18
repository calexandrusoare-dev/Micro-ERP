import { Link } from 'react-router-dom';

export default function PickList() {
  return (
    <div>
      <h3 className="text-lg font-semibold">Pick-uri urgente</h3>
      <p className="mt-2 text-sm text-slate-600">Comenzi ce trebuie procesate imediat.</p>
      <div className="mt-4 space-y-3">
        {[{ id: 'P-201', eta: '15:30' }, { id: 'P-205', eta: '16:00' }].map((p) => (
          <div key={p.id} className="rounded-3xl bg-white p-4 border border-red-100 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-950">{p.id}</p>
              <p className="text-sm text-slate-500">ETA {p.eta}</p>
            </div>
            <Link to="/warehouse" className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900">Deschide</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
