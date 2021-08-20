import React from 'react';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.homePageText}>Here you can see my home projects</h1>
    </div>
  );
}

export default HomePage;
