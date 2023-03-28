import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import { countriesList } from 'db/countries';
import { useEffect } from 'react';

const AppRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/country') {
      navigate(`/country/${encodeURIComponent(countriesList[0].name)}`);
    }
  }, []);
  
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/country/:id' element={<HomePage />} />
      </Routes>
  );
};

export default AppRoutes;
