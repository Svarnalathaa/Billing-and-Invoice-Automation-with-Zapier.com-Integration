// src/components/Invoice.js
import React from 'react';
import axios from 'axios';

const Invoice = () => {
  const generateInvoice = () => {
    axios.post('http://localhost:3000/api/invoice')
      .then(res => {
        // Handle invoice generation response
        console.log('Invoice generated:', res.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Invoice Generation</h2>
      <button onClick={generateInvoice}>Generate Invoice</button>
    </div>
  );
};

export default Invoice;
