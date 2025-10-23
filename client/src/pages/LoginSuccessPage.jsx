import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
function LoginSuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      console.log('Token received, saving to localStorage:', token);
      localStorage.setItem('project-manager-token', token);
    } else {
      console.error('No token found in URL.');
    }
    navigate('/', { replace: true });
  }, [searchParams, navigate]);
  return null;
}
export default LoginSuccessPage;