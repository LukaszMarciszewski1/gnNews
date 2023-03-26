import styles from './styles.module.scss';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { SUBSTITUTE_IMAGE } from 'constants/index';

const NewsPopupContent: React.FC = () => {
  const currentNews = useSelector((state: RootState) => state.currentNews.news);
  const { title, urlToImage, publishedAt, url, description, content, author, source } = currentNews;

  return (
    <div className={styles.newsPopupContent}>
      <div
        className={styles.urlImage}
        style={{ backgroundImage: `url(${urlToImage ? urlToImage : SUBSTITUTE_IMAGE})` }}
      />
      <div className={styles.content}>
        <span>Sublished: {dayjs(publishedAt).format('DD-MM-YYYY')}</span>
        <h4>Source: {source && source.name}</h4>
        <h3>{title}</h3>
        <p>{description && description}</p>
        <p>{content}</p>
        <span>Author: {author && author}</span>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          Go to article
        </a>
      </div>
    </div>
  );
};

export default NewsPopupContent;
