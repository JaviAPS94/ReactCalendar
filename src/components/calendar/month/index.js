import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from '../header/index';
import CalendarWeek from '../week/index';
import './styles.css';

const CalendarMonth = ({ dayTitles, weeks, dayRender }) => (
  <div className='calendar-month'>
    <CalendarHeader dayTitles={dayTitles} />
    {weeks.map((week) => (
      <CalendarWeek {...week} dayRender={dayRender} />
    ))}
  </div>
);

CalendarMonth.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.object).isRequired,
  dayTitles: PropTypes.arrayOf(String).isRequired,
  dayRender: PropTypes.func.isRequired,
};

export default CalendarMonth;
