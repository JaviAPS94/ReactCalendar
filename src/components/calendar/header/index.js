import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const CalendarHeading = ({ dayTitles }) => (
  <div className='calendar-heading'>
    {dayTitles.map((title) => (
      <div className='calendar-heading__title' key={title}>
        {title}
      </div>
    ))}
  </div>
);

CalendarHeading.propTypes = {
  dayTitles: PropTypes.arrayOf(String).isRequired,
};

export default CalendarHeading;
