import React from 'react';
import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';

const Reminder = ({ id, title, city, color, startDate, onEdit, weather }) => {
  const reminderStyle = {
    borderStyle: 'solid',
    borderTopColor: color,
    borderRadius: 5,
    borderRightColor: 'white',
    borderBottomColor: 'white',
    borderWidth: 5,
    borderLeftColor: color,
  };

  const handleOnClick = () => {
    onEdit(id);
  };

  const getWeather = (weather, startDate) => {
    const timestamp = parse(startDate).getTime();
    let result;

    for (let i = 0; i < weather.length - 1; i++) {
      if (
        timestamp >= new Date(weather[i].dt * 1000).getTime() &&
        timestamp < new Date(weather[i + 1].dt * 1000).getTime()
      ) {
        result = weather[i].weather[0].main;
      }
    }
    return result;
  };

  return (
    <div
      style={reminderStyle}
      className='calendar-reminder'
      onClick={handleOnClick}
      onKeyPress={handleOnClick}
      role='button'
      tabIndex='0'
    >
      {format(startDate, 'H:mm A')} {title} {city}{' '}
      {getWeather(weather, startDate)}
    </div>
  );
};

Reminder.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  onEdit: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Reminder.defaultProps = {
  color: '#f44336',
};

export default Reminder;
