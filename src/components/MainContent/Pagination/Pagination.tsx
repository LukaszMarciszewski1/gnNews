import ReactPaginate from 'react-paginate';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import styles from './styles.module.scss';

interface PaginationProps {
  totalNews: any;
  maxNewsPerPage: number;
  changePage: (e: any) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalNews, maxNewsPerPage, changePage }) => {
  const pageCount =  Math.ceil(totalNews / maxNewsPerPage);

  return (
    <ReactPaginate
      previousLabel={<FaArrowLeft />}
      nextLabel={<FaArrowRight />}
      pageCount={pageCount}
      onPageChange={changePage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName={styles.paginationBtn}
      previousLinkClassName={styles.previousBtn}
      nextLinkClassName={styles.nextBtn}
      disabledClassName={styles.paginationDisabled}
      activeClassName={styles.paginationActive}
    />
  );
};

export default Pagination;
