import React from 'react';
function LoginPage() {
  const handleLogin = () => {
    window.location.href = '/api/auth/google';
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
