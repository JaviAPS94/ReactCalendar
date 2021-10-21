import React from 'react';
import PropTypes from 'prop-types';
import CalendarMonth from '../../calendar/month/index';
import CalendarToolbar from '../../calendar/toolbar/index';
import { createMonthCalendar, dayTitles } from '../viewModel/index';
import './styles.css';

const Calendar = (props) => {
  const { date, dayRender, ...toolbarActions } = props;
  const model = createMonthCalendar(date);
  return (
    <div className='calendar'>
      <CalendarToolbar {...toolbarActions} monthName={model.title} />
      <CalendarMonth {...model} dayRender={dayRender} dayTitles={dayTitles} />
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  dayRender: PropTypes.func.isRequired,
};

export default Calendar;
