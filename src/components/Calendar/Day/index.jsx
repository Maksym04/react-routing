import React from 'react';
import { format } from 'date-fns';
import styles from './../Calendar.module.scss';

function Day() {
  const currentDay = new Date();
  return (
    <section className={styles.daySection}>
      <div className={styles.dayWord}>{format(currentDay, 'eeee')}</div>
      <div className={styles.dayNumber}>{currentDay.getDate()}</div>
    </section>
  );
}

export default Day;
