// File: client/src/services/apiClient.js
/**
 * Reusable API Client Function
 * This function handles adding the auth token and error handling for all
 * our 'fetch' requests.
 */
const apiClient = async (url, options = {}) => {
  const token = localStorage.getItem('project-manager-token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const config = {
    ...options,
    headers,
  };
  if (options.data) {
    config.body = JSON.stringify(options.data);
    delete config.data; 
  }
  const res = await fetch(url, config);
  if (res.status === 401) {
    console.error('Unauthorized. Logging out.');
    localStorage.removeItem('project-manager-token');
    return { unauthorized: true, status: res.status };
  }
  if (!res.ok) {
    try {
      const errorData = await res.json();
      throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
    } catch {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  }

  try {
    const data = await res.json();
    return data;
  } catch {
    return { success: true };
  }
};
export default apiClient;