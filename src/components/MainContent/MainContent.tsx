import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetAllNewsQuery } from 'store/newsApi';
import { RootState } from 'store/store';
import { newsPopupView } from 'store/popupView';
import { useNewsApiData } from 'hooks/useNewsApiData';

import Popup from 'components/common/Popup/Popup';
import NewsPopupContent from './NewsPopupContent/NewsPopupContent';
import Pagination from './Pagination/Pagination';
import NewsCardList from './NewsCardList/NewsCardList';
import { LIST_VIEW } from 'constants/index';
import styles from './styles.module.scss';

const MainContent: React.FC = () => {
  const dispatch = useDispatch();
  const newsData = useNewsApiData();
  const { error, isLoading } = useGetAllNewsQuery();

  const view = useSelector((state: RootState) => state.newsView.view);
  const isNewsPopupOpen = useSelector((state: RootState) => state.popupView.newsPopup);
  const [currentPage, setCurrentPage] = useState(1);

  const maxNewsPerPage = view === LIST_VIEW ? 3 : 6;
  const indexOfLastNews = currentPage * maxNewsPerPage;
  const indexOfFirstNews = indexOfLastNews - maxNewsPerPage;
  const currentNews = newsData?.slice(indexOfFirstNews, indexOfLastNews);

  const handleChangePage = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  const handleCloseNewsPopup = () => {
    dispatch(newsPopupView(false));
  };

  return (
    <div className={styles.mainContent}>
      {error && <div>Error</div>}
      {isLoading ? <div>Loading...</div> : <NewsCardList data={currentNews} view={view} />}
      {newsData?.length && (
        <Pagination totalNews={newsData?.length} maxNewsPerPage={maxNewsPerPage} changePage={handleChangePage} />
      )}
      {isNewsPopupOpen ? (
        <Popup closePopup={handleCloseNewsPopup}>
          <NewsPopupContent />
        </Popup>
      ) : null}
    </div>
  );
};

export default MainContent;
