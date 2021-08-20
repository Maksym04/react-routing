import React from 'react';
import classNames from 'classnames';
import styles from './../Calendar.module.scss';
import PropTypes from 'prop-types';

function CalendarDate(props) {
  const { date, isSameDay, isSameMonth } = props;
  return (
    <td className={classNames({ [styles.sameDay]: isSameDay })}>
      {isSameMonth ? date : ''}
    </td>
  );
}

CalendarDate.propTypes = {
  date: PropTypes.number.isRequired,
  isSameDay: PropTypes.bool.isRequired,
  isSameMonth: PropTypes.bool.isRequired,
};

export default CalendarDate;
