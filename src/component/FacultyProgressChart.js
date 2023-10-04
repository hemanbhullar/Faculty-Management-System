// FacultyProgressChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const FacultyProgressChart = ({ progress }) => {
  const data = {
    labels: ['Progress', 'Remaining'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#36A2EB', 'rgba(0, 0, 0, 0.1)'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '85%', // Adjust this value to control the size of the chart hole
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="faculty-progress-chart">
      <Doughnut data={data} options={options} />
      <div className="progress-label">
        <strong>{progress}%</strong>
      </div>
    </div>
  );
};

export default FacultyProgressChart;
