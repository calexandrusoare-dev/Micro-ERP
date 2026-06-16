import fs from 'fs';
import path from 'path';

const seed = {
  users: [
    { id: 'u1', email: 'admin@demo', name: 'admin', role: 'admin' },
    { id: 'u2', email: 'operator@demo', name: 'operator', role: 'operator' },
  ],
  crm: { leads: 128, fraudCases: 6, conversions: 0.62 },
  planning: { activeLots: 8, criticalMaterials: 14, lineFlowPct: 0.92 },
};

const out = path.join(process.cwd(), 'src', 'lib', 'seedData.json');
fs.writeFileSync(out, JSON.stringify(seed, null, 2));
console.log('Wrote seed data to', out);
