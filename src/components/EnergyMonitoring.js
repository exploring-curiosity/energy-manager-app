import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { energyData } from '../data/energyData';
import '../App.css';

// Register the required components
ChartJS.register(
  CategoryScale, // Register the category scale
  LinearScale, // Register the linear scale
  PointElement, // Register point elements (for data points)
  LineElement, // Register line elements (for the line chart)
  Title, // Register the title plugin
  Tooltip, // Register the tooltip plugin
  Legend // Register the legend plugin
);

const EnergyMonitoring = () => {
  return (
    <div className="energy-monitoring">
      <h2>Energy Monitoring</h2>
      <Line data={energyData} />
    </div>
  );
};

export default EnergyMonitoring;