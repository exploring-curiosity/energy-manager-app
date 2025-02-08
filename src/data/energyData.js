// src/data/energyData.js
export const energyData = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'], // X-axis labels
    datasets: [
      {
        label: 'Energy Consumed by House (kWh)',
        data: [5, 7, 8, 6, 9, 10], // Y-axis data
        borderColor: '#4A90E2',
        fill: false,
      },
      {
        label: 'Energy Sent to Grid (kWh)',
        data: [2, 3, 4, 3, 5, 6], // Y-axis data
        borderColor: '#50E3C2',
        fill: false,
      },
      {
        label: 'Energy Sent to Power Backup (kWh)',
        data: [1, 2, 1, 2, 3, 4], // Y-axis data
        borderColor: '#FF6F61',
        fill: false,
      },
    ],
  };