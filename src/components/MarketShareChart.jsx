import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { brokerDataByClients, brokerDataByRevenue, formatCompactNumber } from '../data/brokerData';
import './MarketShareChart.css';

const MarketShareChart = ({ activeSegment }) => {
  // F&O broker estimated rankings (based on market presence and F&O focus)
  const fnoBrokerData = [
    { rank: 1, name: 'Zerodha', marketShare: 28.5, color: '#2563EB' },
    { rank: 2, name: 'Angel One', marketShare: 22.0, color: '#F97316' },
    { rank: 3, name: 'Upstox', marketShare: 15.2, color: '#8B5CF6' },
    { rank: 4, name: 'Groww', marketShare: 12.5, color: '#22C55E' },
    { rank: 5, name: 'Kotak Securities', marketShare: 8.3, color: '#14B8A6' },
    { rank: 6, name: 'ICICI Direct', marketShare: 5.5, color: '#EC4899' },
    { rank: 7, name: 'Motilal Oswal', marketShare: 4.0, color: '#84CC16' },
    { rank: 8, name: 'HDFC Securities', marketShare: 2.5, color: '#6366F1' },
    { rank: 9, name: '5paisa', marketShare: 1.0, color: '#06B6D4' },
    { rank: 10, name: 'Others', marketShare: 0.5, color: '#94A3B8' },
  ];

  const getData = () => {
    switch (activeSegment) {
      case 'revenue':
        return brokerDataByRevenue.map(b => ({
          name: b.name,
          value: b.marketShare,
          fullValue: b.revenue,
        }));
      case 'fno':
        return fnoBrokerData.map(b => ({
          name: b.name,
          value: b.marketShare,
          color: b.color,
        }));
      default:
        return brokerDataByClients.map(b => ({
          name: b.name,
          value: b.marketShare,
          fullValue: formatCompactNumber(b.clients),
        }));
    }
  };

  const data = getData();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="tooltip-name">{payload[0].payload.name}</p>
          <p className="tooltip-value">{payload[0].value}%</p>
          {payload[0].payload.fullValue && (
            <p className="tooltip-detail">
              {activeSegment === 'clients'
                ? `${payload[0].payload.fullValue} clients`
                : payload[0].payload.fullValue}
            </p>
          )}
          {activeSegment === 'fno' && (
            <p className="tooltip-detail">Estimated F&O market share</p>
          )}
        </div>
      );
    }
    return null;
  };

  const getBarColor = (entry, index) => {
    if (activeSegment === 'fno') {
      return entry.color || '#2563EB';
    }
    const colors = [
      '#2563EB', '#22C55E', '#F97316', '#8B5CF6',
      '#EC4899', '#14B8A6', '#6366F1', '#84CC16',
      '#06B6D4', '#F43F5E'
    ];
    return colors[index] || '#2563EB';
  };

  return (
    <div className="market-share-chart">
      <h3 className="chart-title">
        {activeSegment === 'revenue'
          ? 'Market Share by Revenue'
          : activeSegment === 'fno'
          ? 'F&O Segment - Broker Market Share'
          : 'Market Share by Clients'}
      </h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 30]}
              tickFormatter={(value) => `${value}%`}
              stroke="var(--text-muted)"
              fontSize={12}
            />
            <YAxis
              type="category"
              dataKey="name"
              stroke="var(--text-secondary)"
              fontSize={12}
              width={90}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarColor(entry, index)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {activeSegment === 'fno' && (
        <p className="chart-note">* F&O market share estimated based on trading volume and active client data</p>
      )}
    </div>
  );
};

export default MarketShareChart;
