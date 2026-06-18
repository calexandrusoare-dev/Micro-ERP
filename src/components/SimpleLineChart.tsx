import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function SimpleLineChart({ data, color = '#ef4444' }: { data?: number[]; color?: string }) {
  const labels = Array.from({ length: (data?.length || 7) }, (_, i) => `${i + 1}`);
  const d = data || [10, 20, 12, 30, 25, 28, 35];
  const chartData = {
    labels,
    datasets: [
      {
        label: '',
        data: d,
        fill: false,
        borderColor: color,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  };

  return <div style={{ width: '100%', height: '100%' }}><Line data={chartData} options={options as any} /></div>;
}
