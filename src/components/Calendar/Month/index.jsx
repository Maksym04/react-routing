import React from 'react';
import { format, getWeeksInMonth, getWeek } from 'date-fns';
import styles from './../Calendar.module.scss';
import PropTypes from 'prop-types';
import Week from './../Week';

const getWeeks = date => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstWeek = getWeek(firstDayOfMonth);

  const year = date.getFullYear();

  const weeks = [];

  for (let i = firstWeek; i < firstWeek + getWeeksInMonth(date); i++) {
    weeks.push(<Week key={i} week={i} year={year} date={date} />);
  }

  return weeks;
};

function Month(props) {
  const { date } = props;

  return (
    <section className={styles.monthSection}>
      <table>
        <caption className={styles.monthAndYearBlock}>
          {format(date, 'MMMM y')}
        </caption>
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>{getWeeks(date)}</tbody>
      </table>
    </section>
  );
}

Month.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Month;
