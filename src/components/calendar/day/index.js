import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const CalendarDay = ({ id, date, isSameMonth, isBeginOrLast, dayRender }) => {
  const className = `calendar-day${isSameMonth ? '' : ' calendar-day-grey'}`;
  const titleClassName = `calendar-day__title${
    isBeginOrLast ? ' calendar-day__title_highlighted' : ''
  }`;
  return (
    <div className={className}>
      <span className={titleClassName}>{date.getDate()}</span>
      {dayRender(id)}
    </div>
  );
};

CalendarDay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  dayRender: PropTypes.func.isRequired,
  isToday: PropTypes.bool,
  isSameMonth: PropTypes.bool,
};

CalendarDay.defaultProps = {
  isToday: false,
  isSameMonth: false,
};

export default CalendarDay;
