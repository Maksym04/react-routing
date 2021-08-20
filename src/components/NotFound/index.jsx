import React from 'react';
import styles from './../../pages/HomePage/HomePage.module.scss';

function NotFound(props) {
  const { history } = props;

  setTimeout(() => {
    history.push('/');
  }, 10000);

  return <div className={styles.notFoundPage}></div>;
}

export default NotFound;
