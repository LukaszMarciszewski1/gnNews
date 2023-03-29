import Header from 'components/Header/Header';
import SideMenu from 'components/Sidebar/Sidebar';
import MainContent from 'components/MainContent/MainContent';
import Footer from 'components/Footer/Footer';
import MainPopup from 'components/MainPopup/MainPopup';
import styles from './styles.module.scss';


const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <main>
        <SideMenu />
        <MainContent />
      </main>
      <Footer />
      <MainPopup />
    </div>
  );
};

export default HomePage;
