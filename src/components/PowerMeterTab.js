import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PowerMeterTab = () => {
  const [powerData, setPowerData] = useState({
    house: 0,
    backup: 0,
    grid: 0,
  });
  const [msg, setMsg] = useState('');
  const total = 3

  useEffect(() => {
    async function fetchData1() {
        try {
            const url = "https://groq-gen-ai.onrender.com/api/groq_thinks";
            const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            // Wait for the response and parse it as JSON
            const data = await response.json();  // This is where we extract the JSON
        
            setMsg(data.data)
          } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    async function fetchData2() {
        const url = "https://groq-gen-ai.onrender.com/api/groq_metrics"
          const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json()
        console.log(data)
        setPowerData({
            house: data[0],
            backup: data[1],
            grid: data[2],
        })
      }
    fetchData1()
    fetchData2()
  }, [])
  return (
    <div style={{ background: '#e0f7fa', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ color: '#00796b', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>
        Power Consumption Metrics
      </h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
        {Object.keys(powerData).map((key) => (
          <div key={key} style={{ display: 'flex', flexDirection:'column',textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ color: '#004d40', fontWeight: 'bold', marginBottom: '10px' }}>
              {key === 'house' && 'Electricity to House'}
              {key === 'backup' && 'Electricity to Backup Power Supply'}
              {key === 'grid' && 'Electricity Back to Grid'}
            </h3>
            <div style={{ width: '150px', marginBottom: '10px' }}>
              <CircularProgressbar
                value={powerData[key]/total*100}
                text={`${powerData[key]} kWh`}
                styles={buildStyles({
                  pathColor: key === 'house' ? '#00796b' : key === 'backup' ? '#ffa000' : '#4caf50',
                  textColor: '#004d40',
                  trailColor: '#b2dfdb',
                })}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px', color: '#00796b' }}>
        {msg}
      </div>
    </div>
  );
};

export default PowerMeterTab;