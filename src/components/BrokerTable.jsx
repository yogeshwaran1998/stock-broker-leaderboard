import { brokerDataByClients, brokerDataByRevenue, fnoSegmentData, commoditySegmentData, formatCompactNumber } from '../data/brokerData';
import './BrokerTable.css';

// F&O broker estimated rankings (based on market presence and F&O focus)
const fnoBrokerData = [
  { rank: 1, name: 'Zerodha', clients: '~45 Lakh', marketShare: 28.5, highlight: false },
  { rank: 2, name: 'Angel One', clients: '~35 Lakh', marketShare: 22.0, highlight: false },
  { rank: 3, name: 'Upstox', clients: '~24 Lakh', marketShare: 15.2, highlight: false },
  { rank: 4, name: 'Groww', clients: '~20 Lakh', marketShare: 12.5, highlight: false },
  { rank: 5, name: 'Kotak Securities', clients: '~13 Lakh', marketShare: 8.3, highlight: true },
  { rank: 6, name: 'ICICI Direct', clients: '~9 Lakh', marketShare: 5.5, highlight: false },
  { rank: 7, name: 'Motilal Oswal', clients: '~6 Lakh', marketShare: 4.0, highlight: false },
  { rank: 8, name: 'HDFC Securities', clients: '~4 Lakh', marketShare: 2.5, highlight: false },
  { rank: 9, name: '5paisa', clients: '~2 Lakh', marketShare: 1.0, highlight: false },
  { rank: 10, name: 'Others', clients: '~2 Lakh', marketShare: 0.5, highlight: false },
];

const BrokerTable = ({ activeSegment }) => {
  const getTableData = () => {
    switch (activeSegment) {
      case 'revenue':
        return {
          headers: ['Rank', 'Broker', 'Revenue', 'Market Share'],
          data: brokerDataByRevenue.map(b => ({
            rank: b.rank,
            name: b.name,
            value: b.revenue,
            share: b.marketShare,
            highlight: b.name === 'Kotak Securities',
          })),
        };
      case 'fno':
        return {
          headers: ['Rank', 'Broker', 'Est. F&O Clients', 'Market Share'],
          data: fnoBrokerData.map(b => ({
            rank: b.rank,
            name: b.name,
            value: b.clients,
            share: b.marketShare,
            highlight: b.highlight,
          })),
        };
      case 'commodity':
        return {
          headers: ['Rank', 'Exchange', 'Volume', 'Market Share'],
          data: commoditySegmentData.map(item => ({
            rank: item.rank,
            name: item.exchange,
            value: item.volume,
            share: item.marketShare,
            highlight: false,
          })),
        };
      default:
        return {
          headers: ['Rank', 'Broker', 'Active Clients', 'Market Share'],
          data: brokerDataByClients.map(b => ({
            rank: b.rank,
            name: b.name,
            value: formatCompactNumber(b.clients),
            share: b.marketShare,
            highlight: b.name === 'Kotak Securities',
          })),
        };
    }
  };

  const { headers, data } = getTableData();

  return (
    <div className="broker-table">
      <h3 className="table-title">
        {activeSegment === 'revenue'
          ? 'Broker Revenue Rankings'
          : activeSegment === 'fno'
          ? 'F&O Segment - Broker Rankings'
          : activeSegment === 'commodity'
          ? 'Commodity Exchanges'
          : 'Broker Client Rankings'}
      </h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={row.highlight ? 'highlight-row' : ''}>
                <td className="rank-cell">{row.rank}</td>
                <td className="name-cell">
                  <span
                    className="color-dot"
                    style={{ backgroundColor: row.highlight ? '#14B8A6' : '#2563EB' }}
                  />
                  {row.name}
                </td>
                <td className="value-cell">{row.value}</td>
                <td className="share-cell">
                  <div className="share-bar-container">
                    <div
                      className="share-bar"
                      style={{
                        width: `${Math.min(row.share * 3, 100)}%`,
                        backgroundColor: row.highlight ? '#14B8A6' : '#2563EB',
                      }}
                    />
                    <span className="share-text">{row.share}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrokerTable;
