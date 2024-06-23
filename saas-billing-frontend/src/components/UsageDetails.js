// src/components/UsageDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsageDetails = () => {
  const [usage, setUsage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/usage')
      .then(res => setUsage(res.data.usage))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Usage Details</h2>
      {usage ? <p>{usage}</p> : <p>Loading...</p>}
    </div>
  );
};

export default UsageDetails;
