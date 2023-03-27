import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeCountry } from 'store/countrySelector';
import { countriesList } from 'db/countries';
import { useLocation } from 'react-router-dom';
import NavLink from 'components/common/NavLink/NavLink';
import styles from './styles.module.scss';

const SideMenu: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSelectCountry = ( key: string ) => {
    dispatch(changeCountry(key));
  };

  useEffect(() => {
    const currentCountry = countriesList.find(
      (country) => encodeURIComponent(country.name) === location.pathname.split('/').pop()
    );
    dispatch(changeCountry(currentCountry?.key));
  }, [location.pathname]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.countryListContainer}>
        {countriesList.map((country, index) => (
          <NavLink
            key={index}
            path={`/country/${encodeURIComponent(country.name)}`}
            onClick={() => handleSelectCountry(country.key)}
            title={country.name}
            icon={country.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
