import { v4 as uuidv4 } from 'uuid';

// Function to generate random power consumption data for the last 5 hours (10 intervals of 30 minutes)
const generateConsumptionData = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    // Generate random power consumption between 0.1 and 2.0 kWh for each 30-minute interval
    data.push((Math.random() * (2.0 - 0.1) + 0.1).toFixed(2));
  }
  return data;
};

// Initial appliances data
export const initialAppliances = [
  {
    id: uuidv4(),
    diodeId: 'D12345',
    type: 'Refrigerator',
    consumptionData: generateConsumptionData(),
  },
  {
    id: uuidv4(),
    diodeId: 'D67890',
    type: 'Air Conditioner',
    consumptionData: generateConsumptionData(),
  },
  {
    id: uuidv4(),
    diodeId: 'D54321',
    type: 'Washing Machine',
    consumptionData: generateConsumptionData(),
  },
  {
    id: uuidv4(),
    diodeId: 'D98765',
    type: 'Television',
    consumptionData: generateConsumptionData(),
  },
  {
    id: uuidv4(),
    diodeId: 'D11223',
    type: 'Microwave',
    consumptionData: generateConsumptionData(),
  },
  {
    id: uuidv4(),
    diodeId: 'D44556',
    type: 'Laptop',
    consumptionData: generateConsumptionData(),
  },
  {
    id: uuidv4(),
    diodeId: 'D77889',
    type: 'LED Lights',
    consumptionData: generateConsumptionData(),
  },
  {
    id: uuidv4(),
    diodeId: 'D99001',
    type: 'Dishwasher',
    consumptionData: generateConsumptionData(),
  },
  {
    id: uuidv4(),
    diodeId: 'D22334',
    type: 'Electric Kettle',
    consumptionData: generateConsumptionData(),
  },
  {
    id: uuidv4(),
    diodeId: 'D55667',
    type: 'Ceiling Fan',
    consumptionData: generateConsumptionData(),
  },
];