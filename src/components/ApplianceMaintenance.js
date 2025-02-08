import React, { useState } from 'react';
import { initialAppliances } from '../data/appliancesData';
import { v4 as uuidv4 } from 'uuid';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../App.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ApplianceMaintenance = () => {
  const [appliances, setAppliances] = useState(initialAppliances);
  const [showPopup, setShowPopup] = useState(false);
  const [newAppliance, setNewAppliance] = useState({
    diodeId: '',
    type: '',
  });
  const [expandedApplianceId, setExpandedApplianceId] = useState(null);

  // Function to generate random power consumption data
  const generateConsumptionData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      // Generate random power consumption between 0.1 and 2.0 kWh for each 30-minute interval
      data.push((Math.random() * (2.0 - 0.1) + 0.1).toFixed(2));
    }
    return data;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppliance({
      ...newAppliance,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const consumptionData = generateConsumptionData();
    const appliance = {
      id: uuidv4(),
      diodeId: newAppliance.diodeId,
      type: newAppliance.type,
      consumptionData: consumptionData,
    };
    setAppliances([...appliances, appliance]);
    setShowPopup(false);
    setNewAppliance({ diodeId: '', type: '' }); // Reset form
  };

  // Handle popup close
  const handleClosePopup = () => {
    setShowPopup(false);
    setNewAppliance({ diodeId: '', type: '' }); // Reset form
  };

  // Handle appliance removal
  const removeAppliance = (id) => {
    setAppliances(appliances.filter((appliance) => appliance.id !== id));
  };

  // Handle appliance expand/collapse
  const toggleAppliance = (id) => {
    setExpandedApplianceId(expandedApplianceId === id ? null : id);
  };

  return (
    <div className="appliance-maintenance">
      <h2>Appliance Maintenance</h2>
      <button className="add-appliance-button" onClick={() => setShowPopup(true)}>
        Add Appliance
      </button>

      {/* Popup for adding a new appliance */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Add New Appliance</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Diode ID:</label>
                <input
                  type="text"
                  name="diodeId"
                  value={newAppliance.diodeId}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Appliance Type:</label>
                <input
                  type="text"
                  name="type"
                  value={newAppliance.type}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="submit">Add</button>
                <button type="button" onClick={handleClosePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* List of appliances */}
      <ul className="appliance-list">
        {appliances.map((appliance) => (
          <li key={appliance.id} className="appliance-item">
            <div className="appliance-summary" onClick={() => toggleAppliance(appliance.id)}>
              <div>
                <strong>Diode ID:</strong> {appliance.diodeId}
              </div>
              <div>
                <strong>Type:</strong> {appliance.type}
              </div>
              <div>
                <strong>Last Recorded Consumption:</strong> {appliance.consumptionData[appliance.consumptionData.length - 1]} kWh
              </div>
            </div>

            {/* Expanded view with chart */}
            {expandedApplianceId === appliance.id && (
              <div className="appliance-details">
                <Line
                  data={{
                    labels: Array.from({ length: 10 }, (_, i) => `${i * 0.5} hours ago`),
                    datasets: [
                      {
                        label: 'Power Consumption (kWh)',
                        data: appliance.consumptionData,
                        borderColor: '#4A90E2',
                        fill: false,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Power Consumption Over Last 5 Hours',
                      },
                      legend: {
                        position: 'top',
                      },
                    },
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: 'Time',
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: 'Power (kWh)',
                        },
                      },
                    },
                  }}
                />
              </div>
            )}
            <button onClick={() => removeAppliance(appliance.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplianceMaintenance;