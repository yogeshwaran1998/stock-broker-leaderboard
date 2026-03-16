import { Users, Trophy, TrendingUp, Target } from 'lucide-react';
import { brokerDataByClients, formatCompactNumber } from '../data/brokerData';
import './MetricCards.css';

const MetricCards = ({ activeSegment }) => {
  const totalClients = brokerDataByClients.reduce((sum, b) => sum + b.clients, 0);
  const kotakData = brokerDataByClients.find(b => b.name === 'Kotak Securities');
  const topBroker = brokerDataByClients[0];

  const getMetrics = () => {
    switch (activeSegment) {
      case 'revenue':
        return [
          {
            icon: Trophy,
            label: 'Top Broker by Revenue',
            value: 'Zerodha',
            subValue: '~₹6,500 Cr',
            color: '#2563EB',
          },
          {
            icon: Target,
            label: 'Kotak Securities Rank',
            value: '#5',
            subValue: '~₹2,800 Cr revenue',
            color: '#14B8A6',
          },
          {
            icon: TrendingUp,
            label: 'Revenue Concentration',
            value: 'Top 3 = 49%',
            subValue: 'Industry estimate',
            color: '#F97316',
          },
        ];
      case 'fno':
        return [
          {
            icon: Trophy,
            label: 'Top Broker in F&O',
            value: 'Zerodha',
            subValue: '28.5% market share',
            color: '#2563EB',
          },
          {
            icon: Target,
            label: 'Kotak Securities Rank',
            value: '#5',
            subValue: '8.3% estimated share',
            color: '#14B8A6',
          },
          {
            icon: TrendingUp,
            label: 'Top 3 Concentration',
            value: '65.7%',
            subValue: 'Zerodha + Angel + Upstox',
            color: '#F97316',
          },
        ];
      default: // clients
        return [
          {
            icon: Users,
            label: 'Total Active Investors',
            value: formatCompactNumber(totalClients),
            subValue: 'On NSE platform',
            color: '#2563EB',
          },
          {
            icon: Trophy,
            label: 'Top Broker',
            value: topBroker.name,
            subValue: `${topBroker.marketShare}% market share`,
            color: '#22C55E',
          },
          {
            icon: Target,
            label: 'Kotak Securities Rank',
            value: `#${kotakData.rank}`,
            subValue: `${kotakData.marketShare}% market share`,
            color: '#14B8A6',
          },
        ];
    }
  };

  const metrics = getMetrics();

  return (
    <div className="metric-cards">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div key={index} className="metric-card">
            <div className="metric-icon" style={{ backgroundColor: `${metric.color}20`, color: metric.color }}>
              <Icon size={20} />
            </div>
            <div className="metric-content">
              <span className="metric-label">{metric.label}</span>
              <span className="metric-value">{metric.value}</span>
              <span className="metric-sub">{metric.subValue}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricCards;
