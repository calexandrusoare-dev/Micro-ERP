import { Link } from 'react-router-dom';

export default function Reconciliation() {
  return (
    <div>
      <h3 className="text-lg font-semibold">Reconciliere încasări</h3>
      <p className="mt-2 text-sm text-slate-600">Verifică diferențele între cash și aplicație.</p>
      <div className="mt-4 space-y-3">
        {[{ driver: 'Mihai', diff: 2.5 }, { driver: 'Andreea', diff: 0.0 }].map((r) => (
          <div key={r.driver} className="rounded-3xl bg-white p-4 border border-red-100 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-950">{r.driver}</p>
              <p className="text-sm text-slate-500">Diferență {r.diff}%</p>
            </div>
            <Link to="/fleet" className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900">Rezolvă</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
