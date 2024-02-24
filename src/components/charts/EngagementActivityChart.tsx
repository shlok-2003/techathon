// Import necessary packages
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

// Define the EngagementActivity component
interface EngagementActivityProps {
  articlesRead: number[];
  discussionsParticipated: number[];
  campaignsSupported: number[];
}

const EngagementActivity: React.FC<EngagementActivityProps> = ({
  articlesRead,
  discussionsParticipated,
  campaignsSupported,
}) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Articles Read',
        data: articlesRead,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Discussions Participated',
        data: discussionsParticipated,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Campaigns Supported',
        data: campaignsSupported,
        backgroundColor: 'rgba(255,206,86,0.2)',
        borderColor: 'rgba(255,206,86,1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return (
    <div>
      <h2>User Engagement and Activity</h2>
      <div style={{ width: '600px', height: '400px' }}>
        {/* Use either Bar or Line component based on your preference */}
        <Line data={data} options={options} />
        {/* <Bar data={data} options={options} /> */}
      </div>
    </div>
  );
};

// Example usage in your main application
const App: React.FC = () => {
  // Sample data (replace with your actual data)
  const articlesRead = [20, 30, 25, 40, 35, 45];
  const discussionsParticipated = [15, 25, 20, 30, 28, 32];
  const campaignsSupported = [10, 18, 15, 22, 20, 25];

  return (
    <div>
      <h1>Your Main Application</h1>
      {/* Render the EngagementActivity component with sample data */}
      <EngagementActivity
        articlesRead={articlesRead}
        discussionsParticipated={discussionsParticipated}
        campaignsSupported={campaignsSupported}
      />
    </div>
  );
};

export default App;
