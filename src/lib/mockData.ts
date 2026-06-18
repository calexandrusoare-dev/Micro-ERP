export const mockCRM = {
  leads: 128,
  fraudCases: 6,
  conversions: 0.62,
  quarantine: 3,
  openTickets: 18,
  suspiciousOrders: [
    { id: 'A401', reason: 'Plată suspectă', value: '12.340 RON', status: 'Carantină' },
    { id: 'A412', reason: 'Adresă invalidă', value: '8.250 RON', status: 'Verificare' },
  ],
  callTasks: [
    { customer: 'Marex Com', issue: 'Confirmare livrare', priority: 'Înaltă' },
    { customer: 'RetailVest', issue: 'Schimbare dată', priority: 'Medie' },
  ],
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
  lines: [
    { line: 'Lineă 1', status: 'Activă', progress: 78 },
    { line: 'Lineă 2', status: 'Așteaptă materiale', progress: 42 },
    { line: 'Lineă 3', status: 'Verificare calitate', progress: 95 },
  ],
  materialAlerts: [
    { material: 'Țesătură roșie', shortage: '3 role' },
    { material: 'Spumă densă', shortage: '5 mp' },
  ],
};

export const mockWarehouse = {
  pickAccuracy: 84,
  activeLocations: 112,
  returnsInQuarantine: 17,
  urgentPicks: 3,
  reservedCells: 28,
  inboundTasks: [
    { id: 'W-101', type: 'Recepție', eta: '14:00' },
    { id: 'W-107', type: 'Transfer', eta: '15:30' },
  ],
  outboundTasks: [
    { id: 'P-201', due: '15:30' },
    { id: 'P-205', due: '16:00' },
  ],
  returnActions: [
    { sku: 'FZ-181', reason: 'Defect', status: 'Carantină' },
    { sku: 'MB-103', reason: 'Refuz client', status: 'Reînregistrare' },
  ],
};

export const mockRamp = {
  scheduledSlots: 22,
  activeLoads: 14,
  delays: 4,
  gateStatus: [
    { gate: '4', state: 'Încărcare', eta: '16:30' },
    { gate: '7', state: 'Așteptare', eta: '17:00' },
    { gate: '2', state: 'Finalizat', eta: '15:45' },
  ],
  urgentActions: [
    { label: 'Actualizează slotul camionului 32', status: 'Așteptare' },
    { label: 'Redirecționează Tir 105', status: 'Urgent' },
  ],
};

export const mockFleet = {
  activeRoutes: 12,
  liveCollectionsPct: 94,
  cashDiscrepancies: 3,
  drivers: [
    { name: 'Mihai', status: 'Livrare în curs', progress: 82 },
    { name: 'Andreea', status: 'Încarcare', progress: 54 },
    { name: 'Ion', status: 'Așteptare', progress: 30 },
  ],
  reconcileTasks: [
    { title: 'Confirmă încasare Șofer 1', subtitle: 'Cash vs. aplicație' },
    { title: 'Trimite update rută', subtitle: 'Șofer Andreea are întârziere' },
  ],
};

export const mockSales = {
  activeDeals: 24,
  pipelineValue: '1.2M RON',
  overdueInvoices: 5,
  winRate: 0.32,
  opportunities: [
    { name: 'RetailVest', stage: 'Negociere', value: '320.000 RON' },
    { name: 'OfficePro', stage: 'Propunere', value: '215.000 RON' },
  ],
};

export const mockProduction = {
  activeLines: 4,
  criticalShortages: 2,
  completedBatches: 18,
  throughputPct: 0.91,
  batches: [
    { code: 'B-112', status: 'În lucru', due: '16:00' },
    { code: 'B-118', status: 'Uscare', due: '18:30' },
  ],
};

export const mockLogistics = {
  activeRoutes: 32,
  onTimeRate: 0.88,
  loadedVehicles: 15,
  incidents: [
    { route: 'RT-14', issue: 'Trafic', eta: '+12 min' },
    { route: 'RT-21', issue: 'Client absent', eta: '+25 min' },
  ],
};

export default { mockCRM, mockPlanning, mockWarehouse, mockRamp, mockFleet, mockSales, mockProduction, mockLogistics };
