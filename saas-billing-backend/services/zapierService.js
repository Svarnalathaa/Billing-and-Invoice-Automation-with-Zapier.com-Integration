// zapierService.js
const axios = require('axios');

const ZAPIER_API_KEY = 'YOUR_ZAPIER_API_KEY';
const ZAPIER_SCHEDULED_ZAP_URL = 'https://zapier.com/shared/acd22491dd32a620ab7cc672694231273128e3ce';

async function triggerBillingAction(usageMetrics) {
  try {
    const response = await axios.post(
      ZAPIER_SCHEDULED_ZAP_URL,
      {
        apiKey: ZAPIER_API_KEY,
        usageMetrics: usageMetrics
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error triggering billing action:', error);
    throw error;
  }
}

module.exports = { triggerBillingAction };
