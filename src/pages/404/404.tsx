import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

const Page404 = () => {
  return (
    <div className={styles.page404}>
      <h1>404 Error</h1>
      <h3>Page not found</h3>
      <Link to='/'>Back to Home Page</Link>
    </div>
  );
};

export default Page404;
