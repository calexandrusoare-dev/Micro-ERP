import { Link } from 'react-router-dom';

export default function Quarantine() {
  return (
    <div>
      <h3 className="text-lg font-semibold">Carantină - Comenzi suspecte</h3>
      <p className="mt-2 text-sm text-slate-600">Listă de comenzi puse în carantină pentru verificare manuală.</p>
      <div className="mt-4 space-y-3">
        {[{ id: 'A401', reason: 'Plată suspectă' }, { id: 'A412', reason: 'Adresă invalidă' }].map((c) => (
          <div key={c.id} className="rounded-3xl bg-white p-4 border border-red-100 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-950">Comanda #{c.id}</p>
              <p className="text-sm text-slate-500">{c.reason}</p>
            </div>
            <Link to="/crm" className="rounded-2xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-900">Înapoi</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
