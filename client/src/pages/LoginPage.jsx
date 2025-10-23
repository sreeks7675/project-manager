import React from 'react';
const API_BASE_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : ''; 
function LoginPage() {
  const handleLogin = () => {
    const googleLoginUrl = `${API_BASE_URL}/api/auth/google`;
    console.log("Redirecting to:", googleLoginUrl);
    window.location.href = googleLoginUrl;
  };
  return (
    <div className="login-container">
      <h1>Project Manager</h1>
      <p>Please log in to continue</p>
      <button onClick={handleLogin} className="login-button">
        Login with Google
      </button>
    </div>
  );
}
export default LoginPage;
