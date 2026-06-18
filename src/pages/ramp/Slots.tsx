import { Link } from 'react-router-dom';

export default function Slots() {
  return (
    <div>
      <h3 className="text-lg font-semibold">Sloturi programate</h3>
      <p className="mt-2 text-sm text-slate-600">Vizualizare sloturi și posibilități de reprogramare.</p>
      <div className="mt-4 space-y-3">
        {[{ slot: '4', truck: 'T-32', status: 'Încărcare' }, { slot: '7', truck: 'T-58', status: 'Așteptare' }].map((s) => (
          <div key={s.slot} className="rounded-3xl bg-white p-4 border border-red-100 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-950">Poartă {s.slot} - {s.truck}</p>
              <p className="text-sm text-slate-500">{s.status}</p>
            </div>
            <Link to="/ramp" className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900">Detalii</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
