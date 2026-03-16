# Indian Stock Broker Market Share Dashboard

A React-based financial dashboard showing market share of Kotak Securities vs peers across Equity, F&O, and Commodity segments.

## Features

- **Market Share Visualization**: Interactive charts showing broker rankings by clients and revenue
- **Segment Views**: Equity, F&O (Futures & Options), and Commodity segments
- **Dark/Light Theme**: Toggle between themes for comfortable viewing
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- React 19 + Vite 8
- Recharts for data visualization
- Lucide React for icons
- CSS with CSS Variables for theming

## Getting Started

```bash
npm install
npm run dev
```

## Data Sources

The market data in this dashboard is compiled from the following publicly available sources:

### Client Data (Equity Segment)

| Source | URL | Data Type |
|--------|-----|-----------|
| NSE India | nseindia.com | Active client counts on NSE |
| Chittorgarh | chittorgarh.com/report/top_20_share_brokers_in_india_by_clients_at_nse/1/ | Broker rankings by active clients |
| IPO Central | ipocentral.in/top-stock-brokers-in-india/ | Market share estimates |
| Forbes India | forbesindia.com/article/explainers/top-10-largest-stock-brokers-india/95251/1 | Broker analysis and rankings |

### Revenue Data

Revenue figures are estimated based on:
- Broker annual reports and financial disclosures
- Industry analyst estimates from MoneyControl, Economic Times
- IPO Central market analysis

### F&O Segment Data

| Source | URL | Data Type |
|--------|-----|-----------|
| NSE India | nseindia.com | FII/DII/Retail trading volumes |
| SEBI | sebi.gov.in | Monthly derivatives market statistics |

**Note**: Broker-specific F&O market share data is proprietary and not publicly disclosed by exchanges. The dashboard shows aggregate market composition (FII vs DII vs Retail).

### Commodity Segment Data

| Source | URL | Data Type |
|--------|-----|-----------|
| MCX | mcxindia.com | Commodity futures trading volumes |
| NCDEX | ncdexindia.com | Agricultural commodity volumes |

**Note**: Exchange-level data is available. Broker-specific commodity trading data is not publicly disclosed.

## Data Limitations

1. **Client Data**: Based on NSE active client base (as of January 2026)
2. **Revenue**: Estimated figures, not actual disclosed revenues
3. **F&O**: Shows aggregate category breakdown (FII/DII/Retail), not individual broker rankings
4. **Commodity**: Shows exchange-level market share, not broker rankings

## Disclaimer

This dashboard is for informational purposes only. Market data may not be real-time and should not be used for investment decisions. Data accuracy cannot be guaranteed as figures are compiled from multiple sources.
