import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from '../day/index';
import './styles.css';

const CalendarWeek = ({ days, dayRender }) => (
  <div className='calendar-week'>
    {days.map((day) => (
      <CalendarDay {...day} dayRender={dayRender} key={day.id} />
    ))}
  </div>
);

CalendarWeek.propTypes = {
  days: PropTypes.arrayOf(PropTypes.object).isRequired,
  dayRender: PropTypes.func.isRequired,
};

export default CalendarWeek;
