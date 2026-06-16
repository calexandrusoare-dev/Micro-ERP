export const mockCRM = {
  leads: 128,
  fraudCases: 6,
  conversions: 0.62,
  quarantine: 3,
  openTickets: 18,
};

export const mockPlanning = {
  activeLots: 8,
  criticalMaterials: 14,
  lineFlowPct: 0.92,
  tasks: [
    { title: 'Lansează lotul Culoare Roșie', status: 'În curs' },
    { title: 'Verifică consumul pentru canapele 180', status: 'Atenție material' },
    { title: 'Confirmă finisajul scaune VIP', status: 'Terminat' },
  ],
};

export default { mockCRM, mockPlanning };
