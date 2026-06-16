import { type ReactNode } from 'react';
import { LayoutDashboard, Package, Truck, Layers, Users, Shield, Settings2, LogOut } from 'lucide-react';
import { NavLink, useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Quarantine from './pages/crm/Quarantine';
import PickList from './pages/wms/PickList';
import Slots from './pages/ramp/Slots';
import Reconciliation from './pages/fleet/Reconciliation';
import Opportunities from './pages/sales/Opportunities';
import Batches from './pages/production/Batches';
import Incidents from './pages/logistics/Incidents';
import RequireAuth from './components/RequireAuth';
import { CRM } from './modules/crm';
import { Planning } from './modules/planning';
import { Warehouse } from './modules/warehouse';
import { Ramp } from './modules/ramp';
import { Fleet } from './modules/fleet';
import { Sales } from './modules/sales';
import { Production } from './modules/production';
import { Logistics } from './modules/logistics';
import { Admin } from './modules/admin';
import { Settings } from './modules/settings';
import { Dashboard } from './modules/dashboard';

type ModuleType = 'dashboard' | 'crm' | 'planning' | 'warehouse' | 'ramp' | 'fleet' | 'sales' | 'production' | 'logistics' | 'admin' | 'settings';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'crm', label: 'CRM & Fraudă', icon: Layers },
  { id: 'planning', label: 'Producție', icon: Package },
  { id: 'warehouse', label: 'WMS Depozit', icon: Truck },
  { id: 'ramp', label: 'Rampă & Sloturi', icon: Truck },
  { id: 'fleet', label: 'Flotă & Șoferi', icon: Users },
  { id: 'sales', label: 'Sales', icon: Package },
  { id: 'production', label: 'Production', icon: Layers },
  { id: 'logistics', label: 'Logistics', icon: Truck },
  { id: 'admin', label: 'Administrare', icon: Shield },
  { id: 'settings', label: 'Setări', icon: Settings2 },
];

const moduleScreens: Record<ModuleType, ReactNode> = {
  dashboard: <Dashboard />,
  crm: <CRM />,
  planning: <Planning />,
  warehouse: <Warehouse />,
  ramp: <Ramp />,
  fleet: <Fleet />,
  sales: <Sales />,
  production: <Production />,
  logistics: <Logistics />,
  admin: <Admin />,
  settings: <Settings />,
};

const moduleContent: Record<ModuleType, { title: string; description: string; accent: string }> = {
  dashboard: {
    title: 'Dashboard Operațional',
    description: 'Vizualizare centrală a KPI-urilor, stadiilor și notificărilor din sistem.',
    accent: 'text-red-600',
  },
  crm: {
    title: 'CRM & Anti-Fraudă',
    description:
      'Showroom, call center și carantină integrate pentru validare rapidă și blocare fraudă în timp real.',
    accent: 'text-red-600',
  },
  planning: {
    title: 'Planificare Producție',
    description:
      'Planuri de producție dinamice, loturi monitorizate și consum material optimizat pentru fiecare secție.',
    accent: 'text-red-600',
  },
  warehouse: {
    title: 'WMS & Depozit',
    description:
      'Sistem de pick/scan avansat, hartă depozit și retururi cu carantină directe din fluxul de recepție.',
    accent: 'text-red-600',
  },
  ramp: {
    title: 'Rampă & Sloturi Inteligente',
    description:
      'Programări automate ale sloturilor, vizualizare TV a rampelor și supraveghere ML pentru întreaga operare.',
    accent: 'text-red-600',
  },
  fleet: {
    title: 'Flotă & Șoferi Live',
    description:
      'Control live al rutelor, încasărilor și reconciliere pentru șoferi în teren.',
    accent: 'text-red-600',
  },
  sales: {
    title: 'Sales & Ofertare',
    description: 'Pipeline-ul de vânzări, comenzi active și facturare pentru canale B2B/B2C.',
    accent: 'text-red-600',
  },
  production: {
    title: 'Production Tracking',
    description: 'Monitorizare loturi, etape finale și înfoliere pentru comenzi în producție.',
    accent: 'text-red-600',
  },
  logistics: {
    title: 'Logistics & Transport',
    description: 'Planificare rute, foi de parcurs și control camioane pentru livrări eficiente.',
    accent: 'text-red-600',
  },
  admin: {
    title: 'Administrare Centrală',
    description: 'Controlul utilizatorilor, auditului și securității pentru întregul ERP.',
    accent: 'text-red-600',
  },
  settings: {
    title: 'Setări & Configurații',
    description: 'Parametri de sistem, notificări și integrare ERP pentru infrastructură.',
    accent: 'text-red-600',
  },
};

export default function MicroERP() {
  const { user, logout } = useAuth();
  if (!user) return <Login />;
  const location = useLocation();
  const path = location.pathname.replace(/^\//, '') || 'dashboard';
  const activeModule = (path.split('/')[0] as ModuleType) || 'dashboard';
  const current = moduleContent[activeModule];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1800px] flex flex-col md:flex-row">
      <aside className="hidden md:flex flex-col w-80 bg-white border-r border-red-100 p-6 justify-between shadow-sm">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white text-lg font-bold">μ</div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-red-600 font-semibold">Prestigemob</p>
              <h1 className="text-2xl font-bold text-slate-950">Micro-ERP</h1>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={`/${item.id}`}
                  className={({ isActive }) =>
                    `w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-red-600 text-white shadow-md shadow-red-200' : 'text-slate-700 hover:bg-red-50 hover:text-red-700'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="rounded-3xl border border-red-100 bg-red-50 p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-red-600 font-semibold">Companie activă</p>
          <p className="mt-2 font-semibold text-slate-950">Prestige Network SRL</p>
          <p className="mt-1 text-sm text-slate-500">Acces gestionat prin RLS.</p>
        </div>
        </aside>

          <main className="flex-1 p-6 md:p-12">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600">Modul activ</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 capitalize">{current.title}</h2>
            <p className="mt-3 max-w-2xl text-slate-600">{current.description}</p>
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
            <span className="h-2 w-2 rounded-full bg-red-600" /> Cont verificat
            <button onClick={logout} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </header>

        <section className="rounded-[32px] border border-red-100 bg-red-50 p-8 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Rezumat modul</h3>
              <p className="mt-2 text-sm text-slate-600">Date operaționale și informaționale separate pentru decizii rapide.</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-red-700 shadow-sm border border-red-100">Analiză</span>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Operațional</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">{activeModule === 'crm' ? 'Carantină live' : activeModule === 'planning' ? 'Plan producție' : activeModule === 'warehouse' ? 'Pickare' : activeModule === 'ramp' ? 'Sloturi' : activeModule === 'fleet' ? 'Flotă' : activeModule === 'sales' ? 'Vânzări' : activeModule === 'production' ? 'Producție' : activeModule === 'logistics' ? 'Logistică' : 'Dashboard'}</p>
              <p className="mt-2 text-sm text-slate-600">Starea curentă a operațiunilor pentru acest modul.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Informațional</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">{activeModule === 'crm' ? '27 comenzi' : activeModule === 'planning' ? '8 loturi' : activeModule === 'warehouse' ? '84%' : activeModule === 'ramp' ? '22 sloturi' : activeModule === 'fleet' ? '12 rute' : activeModule === 'sales' ? '24 oportunități' : activeModule === 'production' ? '18 loturi' : activeModule === 'logistics' ? '32 rute' : 'Dashboard'}</p>
              <p className="mt-2 text-sm text-slate-600">Indicatori de performanță și agendă tactică.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 border border-red-100 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Prioritate</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">{activeModule === 'crm' ? 'Fraudă' : activeModule === 'planning' ? 'Rotație' : activeModule === 'warehouse' ? 'Pickup' : activeModule === 'ramp' ? 'Disponibilitate' : activeModule === 'fleet' ? 'Reconciliere' : activeModule === 'sales' ? 'Oportunități' : activeModule === 'production' ? 'Finalizare' : activeModule === 'logistics' ? 'Livrare' : 'Plan'}</p>
              <p className="mt-2 text-sm text-slate-600">Acțiuni imediate sugerate pentru modul curent.</p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-red-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">Zona operațională</h3>
              <p className="mt-2 text-sm text-slate-600">Acțiuni live, sarcini și fluxuri directe pentru modul selectat.</p>
            </div>
            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">Operare</span>
          </div>
          <div className="mt-6">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/crm" element={<CRM />} />
              <Route path="/crm/quarantine" element={<Quarantine />} />
              <Route path="/planning" element={<Planning />} />
              <Route path="/warehouse" element={<Warehouse />} />
              <Route path="/warehouse/picklist" element={<PickList />} />
              <Route path="/ramp" element={<Ramp />} />
              <Route path="/ramp/slots" element={<Slots />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/fleet/reconciliation" element={<Reconciliation />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/opportunities" element={<Opportunities />} />
              <Route path="/production" element={<Production />} />
              <Route path="/production/batches" element={<Batches />} />
              <Route path="/logistics" element={<Logistics />} />
              <Route path="/logistics/incidents" element={<Incidents />} />
              <Route path="/admin" element={<RequireAuth role="admin">{moduleScreens.admin}</RequireAuth>} />
              <Route path="/settings" element={<RequireAuth role="admin">{moduleScreens.settings}</RequireAuth>} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </section>
        
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-red-100 px-3 py-3 flex justify-between items-center shadow-sm">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={`/${item.id}`}
              className={({ isActive }) => `flex flex-col items-center gap-1 rounded-3xl px-3 py-2 text-xs transition ${isActive ? 'bg-red-600 text-white' : 'text-slate-500 hover:bg-red-50 hover:text-red-700'}`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label.split(' ')[0]}</span>
            </NavLink>
          );
        })}
      </nav>
        </div>
      </div>
    </div>
  );
}
