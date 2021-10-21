import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { CirclePicker } from 'react-color';
import './styles.css';

const ReminderModal = ({ item, onSave, onDelete, onCancelEdit }) => {
  const [fields, setFields] = useState({ color: '#ffffff', ...item });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleDateChange = (date) => {
    setFields({ ...fields, startDate: date });
  };

  const handleColorChange = (color) => {
    setFields({ ...fields, color: color.hex });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(fields);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className='reminder'>
      <h3>Create/Edit reminder</h3>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-column'>
            <label>
              Name:
              <input
                placeholder='Name'
                type='text'
                className='input-title'
                autoComplete='off'
                maxLength='30'
                width='10'
                value={fields.title}
                name='title'
                onChange={handleChange}
              />
            </label>
            <label>
              City:
              <input
                placeholder='City'
                type='text'
                className='input-title'
                autoComplete='off'
                maxLength='30'
                value={fields.city}
                name='city'
                onChange={handleChange}
              />
            </label>
            <label>
              Date:
              <DatePicker
                selected={fields.startDate}
                onChange={handleDateChange}
                showTimeSelect
                timeFormat='HH:mm'
                timeIntervals={10}
                dateFormat='MMMM d, yyyy h:mm aa'
                timeCaption='time'
              />
            </label>
          </div>
          <div className='form-column'>
            <label>
              Choose a color:
              <CirclePicker
                color={fields.color}
                onChangeComplete={handleColorChange}
              />
            </label>
          </div>
        </div>
        <div className='form-buttons'>
          {fields.id && (
            <button type='button' className='delete' onClick={handleDelete}>
              Delete
            </button>
          )}
          <button type='button' onClick={onCancelEdit}>
            Cancel
          </button>
          <input
            type='submit'
            className='primary'
            value='Save'
            disabled={!fields.title}
          />
        </div>
      </form>
    </div>
  );
};

ReminderModal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancelEdit: PropTypes.func.isRequired,
};

export default ReminderModal;
