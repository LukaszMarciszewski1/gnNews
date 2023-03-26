import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

interface NavLinkProps {
  path: string;
  title: string;
  icon?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ path, title, icon, onClick }) => {
  const location = useLocation();

  return (
    <Link to={path} onClick={onClick} className={`${styles.navLink} ${location.pathname === path && styles.active}`}>
      <img src={icon} alt='flag'/>
      <span>{title}</span>
    </Link>
  );
};

export default NavLink;
