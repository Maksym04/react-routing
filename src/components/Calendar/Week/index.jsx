import React from 'react';
import { parse, addDays, isSameDay, isSameMonth } from 'date-fns';
import PropTypes from 'prop-types';
import CalendarDate from './../CalendarDate';

const getDaysOfWeek = (date, week, year) => {
  const startOfWeek = parse(`${year} ${week} `, 'Y w', new Date());

  const days = [];
  for (let i = 0; i < 7; ++i) {
    const dateIndex = addDays(startOfWeek, i);

    days.push(
      <CalendarDate
        date={dateIndex.getDate()}
        isSameDay={isSameDay(new Date(), dateIndex)}
        isSameMonth={isSameMonth(date, dateIndex)}
      />
    );
  }

  return days;
};

function Week(props) {
  const { date, week, year } = props;

  return <tr>{getDaysOfWeek(date, week, year)}</tr>;
}

Week.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  week: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Week;
