import { useState, useEffect } from 'react';
import Header from './components/Header';
import SegmentTabs from './components/SegmentTabs';
import MetricCards from './components/MetricCards';
import MarketShareChart from './components/MarketShareChart';
import BrokerTable from './components/BrokerTable';
import DataSources from './components/DataSources';
import './styles/theme.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSegment, setActiveSegment] = useState('clients');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <div className="content-header">
          <SegmentTabs activeSegment={activeSegment} setActiveSegment={setActiveSegment} />
        </div>

        <div className="metrics-section">
          <MetricCards activeSegment={activeSegment} />
        </div>

        <div className="charts-section">
          <div className="chart-wrapper">
            <MarketShareChart activeSegment={activeSegment} />
          </div>
        </div>

        <div className="table-section">
          <BrokerTable activeSegment={activeSegment} />
        </div>

        <div className="sources-section">
          <DataSources activeSegment={activeSegment} />
        </div>
      </main>

      <footer className="footer">
        <p>Indian Stock Broker Market Share Dashboard | Data as of January 2026</p>
      </footer>
    </div>
  );
}

export default App;
