import { PieChart, BarChart3, Layers } from 'lucide-react';
import './SegmentTabs.css';

const SegmentTabs = ({ activeSegment, setActiveSegment }) => {
  const segments = [
    { id: 'clients', label: 'By Clients', icon: PieChart },
    { id: 'revenue', label: 'By Revenue', icon: BarChart3 },
    { id: 'fno', label: 'F&O Segment', icon: Layers },
  ];

  return (
    <div className="segment-tabs">
      {segments.map((segment) => {
        const Icon = segment.icon;
        return (
          <button
            key={segment.id}
            className={`segment-tab ${activeSegment === segment.id ? 'active' : ''}`}
            onClick={() => setActiveSegment(segment.id)}
          >
            <Icon size={18} />
            <span>{segment.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SegmentTabs;
