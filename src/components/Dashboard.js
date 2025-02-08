import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import EnergyMonitoring from './EnergyMonitoring';
import ApplianceMaintenance from './ApplianceMaintenance';
import EWallet from './EWallet';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Clear the token and update the auth state
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="tab-list">
          <Tab className="tab">Energy Monitoring</Tab>
          <Tab className="tab">Appliance Maintenance</Tab>
          <Tab className="tab">E-Wallet</Tab>
        </TabList>

        <TabPanel className="tab-content">
          <EnergyMonitoring />
        </TabPanel>
        <TabPanel className="tab-content">
          <ApplianceMaintenance />
        </TabPanel>
        <TabPanel className="tab-content">
          <EWallet />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;