import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [usageDetails, setUsageDetails] = useState({});
  const [billingDetails, setBillingDetails] = useState({});

  useEffect(() => {
    const fetchUsageDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/usage');
        setUsageDetails(response.data);
      } catch (error) {
        console.error('Error fetching usage details:', error);
      }
    };

    const fetchBillingDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/billing');
        setBillingDetails(response.data);
      } catch (error) {
        console.error('Error fetching billing details:', error);
      }
    };

    fetchUsageDetails();
    fetchBillingDetails();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="usage-details">
        <h3>Usage Details</h3>
        <pre>{JSON.stringify(usageDetails, null, 2)}</pre>
      </div>
      <div className="billing-details">
        <h3>Billing Information</h3>
        <pre>{JSON.stringify(billingDetails, null, 2)}</pre>
      </div>
      <button className="invoice-button" onClick={() => axios.post('http://localhost:3000/api/invoice')}>Generate Invoice</button>
    </div>
  );
};

export default Dashboard;
