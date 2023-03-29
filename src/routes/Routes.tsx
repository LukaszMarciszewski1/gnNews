import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Page404 from 'pages/Page404/Page404';
import { countriesList } from 'db/countries';
import { useEffect } from 'react';

const AppRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(`/country/${encodeURIComponent(countriesList[0].name)}`);
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/country/:id' element={<Home />} />
      <Route path='/*' element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
