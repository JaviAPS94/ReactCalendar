import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import useInjectReducer from '../../hooks/useInjectReducer';
import Calendar from '../../components/calendar/structure/index';
import CalendarReminder from '../../components/calendar/reminder/index';
import Modal from '../../components/modal/index';
import Reminder from '../../components/calendar/reminderModal/index';
import {
  reducer,
  getCurrentDate,
  getRemindersByDate,
  getSelectedItem,
} from '../../redux/reminder/index';
import {
  moveBacward,
  moveForward,
  addItem,
  editItem,
  saveItem,
  deleteItem,
  cancelEdit,
} from '../../redux/reminder/action';

const key = 'remindersCalendar';

const RemindersCalendar = (props) => {
  useInjectReducer({ key, reducer });

  const {
    selectedItem,
    onCancelEdit,
    onSave,
    onDelete,
    remindersByDate,
    ...calendarProps
  } = props;

  let reminderModal = null;
  if (selectedItem) {
    reminderModal = (
      <Modal>
        <Reminder
          item={selectedItem}
          onCancelEdit={onCancelEdit}
          onSave={onSave}
          onDelete={onDelete}
        />
      </Modal>
    );
  }

  const renderReminders = (dayId) => {
    if (!remindersByDate[dayId]) {
      return null;
    }
    return remindersByDate[dayId].map((reminder) => (
      <CalendarReminder {...reminder} onEdit={props.onEdit} key={reminder.id} />
    ));
  };

  return (
    <>
      {reminderModal}
      <Calendar {...calendarProps} dayRender={renderReminders} />
    </>
  );
};

const mapStateToProps = (state) => ({
  date: getCurrentDate(state),
  remindersByDate: getRemindersByDate(state),
  selectedItem: getSelectedItem(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPrevious: () => dispatch(moveBacward()),
  onNext: () => dispatch(moveForward()),
  onAddNew: () => dispatch(addItem()),
  onEdit: (id) => dispatch(editItem(id)),
  onSave: async (item) => dispatch(await saveItem(item)),
  onDelete: (id) => dispatch(deleteItem(id)),
  onCancelEdit: () => dispatch(cancelEdit()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(RemindersCalendar);
