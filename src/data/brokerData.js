// Market data for Indian Stock Brokers (January 2026)
// Sources: NSE India, Chittorgarh, Forbes India, IPO Central, SEBI

export const brokerDataByClients = [
  { rank: 1, name: 'Groww', clients: 12500000, marketShare: 24.5, color: '#22C55E' },
  { rank: 2, name: 'Zerodha', clients: 7585000, marketShare: 17.2, color: '#2563EB' },
  { rank: 3, name: 'Angel One', clients: 7320000, marketShare: 15.1, color: '#F97316' },
  { rank: 4, name: 'Upstox', clients: 2571000, marketShare: 7.4, color: '#8B5CF6' },
  { rank: 5, name: 'ICICI Direct', clients: 2045086, marketShare: 4.0, color: '#EC4899' },
  { rank: 6, name: 'Kotak Securities', clients: 1800000, marketShare: 3.03, color: '#14B8A6' },
  { rank: 7, name: 'HDFC Securities', clients: 1500000, marketShare: 2.8, color: '#6366F1' },
  { rank: 8, name: 'Motilal Oswal', clients: 1200000, marketShare: 2.2, color: '#84CC16' },
  { rank: 9, name: '5paisa', clients: 850000, marketShare: 1.6, color: '#06B6D4' },
  { rank: 10, name: 'IIFL Securities', clients: 750000, marketShare: 1.4, color: '#F43F5E' },
];

// Estimated revenue rankings (based on available estimates)
export const brokerDataByRevenue = [
  { rank: 1, name: 'Zerodha', revenue: '~₹6,500 Cr', marketShare: 22.0, color: '#2563EB' },
  { rank: 2, name: 'Groww', revenue: '~₹4,200 Cr', marketShare: 14.2, color: '#22C55E' },
  { rank: 3, name: 'Angel One', revenue: '~₹3,800 Cr', marketShare: 12.9, color: '#F97316' },
  { rank: 4, name: 'ICICI Direct', revenue: '~₹3,200 Cr', marketShare: 10.8, color: '#EC4899' },
  { rank: 5, name: 'Kotak Securities', revenue: '~₹2,800 Cr', marketShare: 9.5, color: '#14B8A6' },
  { rank: 6, name: 'HDFC Securities', revenue: '~₹2,200 Cr', marketShare: 7.5, color: '#6366F1' },
  { rank: 7, name: 'Motilal Oswal', revenue: '~₹1,800 Cr', marketShare: 6.1, color: '#84CC16' },
  { rank: 8, name: 'Upstox', revenue: '~₹1,500 Cr', marketShare: 5.1, color: '#8B5CF6' },
];

// F&O Segment insights (aggregate market data)
export const fnoSegmentData = [
  { rank: 1, category: 'Foreign Institutional Investors (FII)', marketShare: 42.5 },
  { rank: 2, category: 'Domestic Institutional Investors (DII)', marketShare: 28.3 },
  { rank: 3, category: 'Proprietary Traders', marketShare: 15.2 },
  { rank: 4, category: 'Retail Investors (All Brokers)', marketShare: 14.0 },
];

// Commodity Segment (MCX data)
export const commoditySegmentData = [
  { rank: 1, exchange: 'MCX (Multi Commodity Exchange)', marketShare: 88.8, volume: '₹12.5 Lakh Cr' },
  { rank: 2, exchange: 'NCDEX (National Commodity Exchange)', marketShare: 11.2, volume: '₹1.58 Lakh Cr' },
];

// Segment descriptions
export const segmentInfo = {
  equity: {
    title: 'Equity Segment',
    description: 'Cash market trading including delivery and intraday trades.',
    note: 'Data represents active clients registered for equity trading on NSE.',
  },
  fo: {
    title: 'F&O Segment',
    description: 'Futures and Options derivatives trading on NSE & BSE.',
    note: 'Broker-specific F&O data is proprietary. Shows aggregate market composition.',
  },
  commodity: {
    title: 'Commodity Segment',
    description: 'Commodity futures trading on MCX and NCDEX.',
    note: 'Exchange-level data available. Broker commodity trading data not publicly disclosed.',
  },
};

// Data sources for citation
export const dataSources = [
  { name: 'NSE India', url: 'nseindia.com', data: 'Active client counts' },
  { name: 'Chittorgarh', url: 'chittorgarh.com', data: 'Broker rankings by clients' },
  { name: 'SEBI', url: 'sebi.gov.in', data: 'Monthly market statistics' },
  { name: 'IPO Central', url: 'ipocentral.in', data: 'Market share estimates' },
  { name: 'Forbes India', url: 'forbesindia.com', data: 'Broker analysis' },
];

// Formatters
export const formatNumber = (num) => {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(2) + ' Cr';
  } else if (num >= 100000) {
    return (num / 100000).toFixed(2) + ' Lakh';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + ' Thousand';
  }
  return num.toString();
};

export const formatCompactNumber = (num) => {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(1) + ' Cr';
  } else if (num >= 100000) {
    return (num / 100000).toFixed(1) + ' L';
  }
  return num.toLocaleString();
};
