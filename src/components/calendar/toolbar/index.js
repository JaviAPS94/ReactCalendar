import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const CalendarToolbar = ({ onPrevious, onNext, onAddNew, monthName }) => (
  <div className='calendar-toolbar'>
    <div className='calendar-toolbar__month'>
      <div className='col col-start'>
        <div className='icon' onClick={onPrevious}>
          chevron_left
        </div>
      </div>
      <div className='col col-center'>
        <span>{monthName}</span>
      </div>
      <div className='col col-end' onClick={onNext}>
        <div className='icon'>chevron_right</div>
      </div>
    </div>
    <div className='calendar-toolbar__month'>
      <button
        type='button'
        className='calendar-toolbar__add-new'
        onClick={onAddNew}
      >
        Add Reminder
      </button>
    </div>
  </div>
);

CalendarToolbar.defaultProps = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onAddNew: PropTypes.func.isRequired,
};

export default CalendarToolbar;
