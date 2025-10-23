// We check the 'NODE_ENV' variable. Vercel automatically sets this to 'production'.
const isProduction = process.env.NODE_ENV === 'production';

// Get the public URL of our deployed Render server
// PASTE YOUR RENDER URL HERE
const productionApiUrl = 'https://project-manager-backend-wrgn.onrender.com';

// In development, we use a relative path (which our Vite proxy catches).
// In production, we use the full, absolute URL of our deployed server.
export const API_BASE_URL = isProduction ? productionApiUrl : '';