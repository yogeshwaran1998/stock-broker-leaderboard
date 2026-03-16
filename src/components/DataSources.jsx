import { Info, ExternalLink } from 'lucide-react';
import { dataSources, segmentInfo } from '../data/brokerData';
import './DataSources.css';

const DataSources = ({ activeSegment }) => {
  const getSegmentNote = () => {
    switch (activeSegment) {
      case 'revenue':
        return segmentInfo.equity.description;
      case 'fno':
        return "F&O market share estimated based on trading volume, active client data, and industry reports. Broker-specific F&O data is not publicly disclosed by exchanges.";
      case 'commodity':
        return segmentInfo.commodity.note;
      default:
        return segmentInfo.equity.note;
    }
  };

  return (
    <div className="data-sources">
      <div className="sources-header">
        <Info size={16} />
        <span>Data Sources & Notes</span>
      </div>
      <p className="segment-note">{getSegmentNote()}</p>
      <div className="sources-list">
        {dataSources.map((source, index) => (
          <div key={index} className="source-item">
            <span className="source-name">{source.name}</span>
            <span className="source-data">{source.data}</span>
          </div>
        ))}
      </div>
      <p className="disclaimer">
        * Market data is based on publicly available information as of January 2026.
        Broker-specific segment data (Equity/F&O/Commodity) is proprietary and not publicly disclosed by exchanges.
      </p>
    </div>
  );
};

export default DataSources;
