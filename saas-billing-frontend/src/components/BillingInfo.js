// src/components/BillingInfo.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BillingInfo = () => {
  const [billing, setBilling] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/billing')
      .then(res => setBilling(res.data.billing))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Billing Information</h2>
      {billing ? (
        <div>
          <p>Current Billing Cycle: {billing.currentCycle}</p>
          <p>Cumulative Usage: {billing.cumulativeUsage}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BillingInfo;
