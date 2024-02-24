import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const VolunteeringDonations: React.FC = () => {
  const [volunteeringData, setVolunteeringData] = useState({
    hours: {
      environmental: 20,
      educational: 15,
      health: 25,
    },
    activities: {
      environmental: 10,
      educational: 8,
      health: 12,
    },
  });

  const [donationData, setDonationData] = useState({
    totalAmount: 500,
    organizations: {
      environment: 200,
      education: 150,
      health: 150,
    },
  });

  const volunteeringHoursBarChart = {
    labels: Object.keys(volunteeringData.hours),
    datasets: [
      {
        label: 'Volunteering Hours',
        data: Object.values(volunteeringData.hours),
      },
    ],
  };

  const volunteeringActivitiesPieChart = {
    labels: Object.keys(volunteeringData.activities),
    datasets: [
      {
        data: Object.values(volunteeringData.activities),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const donationBarChart = {
    labels: Object.keys(donationData.organizations),
    datasets: [
      {
        label: 'Donation Amount',
        data: Object.values(donationData.organizations),
      },
    ],
  };

  return (
    <div>
      <h2>Volunteering & Donations</h2>
      <div>
        <h3>Volunteering Hours Across Causes</h3>
        <Bar data={volunteeringHoursBarChart} />
      </div>
      <div>
        <h3>Types of Volunteering Activities</h3>
        <Pie data={volunteeringActivitiesPieChart} />
      </div>
      <div>
        <h3>Total Donation Amount to Various Causes</h3>
        <Bar data={donationBarChart} />
      </div>
    </div>
  );
};

export default VolunteeringDonations;
