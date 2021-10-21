import * as uuid from 'uuid/v4';
import { subMonths, addMonths } from 'date-fns';
import {
  SET_BACK,
  SET_FORWARD,
  SET_ADD_REMINDER,
  SET_EDIT_REMINDER,
  SET_SAVE_REMINDER,
  SET_DELETE_REMINDER,
  SET_CANCEL_EDIT_REMINDER,
} from './action';

const editItem = (items, editedItem) => {
  return items.map((item) => {
    if (item.id === editedItem.id) {
      return { ...item, ...editedItem };
    }
    return item;
  });
};

const addItem = (items, newItem) => {
  return [...items, { ...newItem, id: uuid() }];
};

const deleteItem = (items, id) => {
  return items.filter((item) => item.id !== id);
};

const previousMonth = (date) => {
  return subMonths(date, 1);
};

const nextMonth = (date) => {
  return addMonths(date, 1);
};

export const initialState = {
  currentDate: new Date(),
  reminders: [],
  selectedItem: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FORWARD:
      return { ...state, currentDate: nextMonth(state.currentDate) };
    case SET_BACK:
      return { ...state, currentDate: previousMonth(state.currentDate) };
    case SET_ADD_REMINDER:
      return {
        ...state,
        selectedItem: { id: null, title: '', startDate: new Date() },
      };
    case SET_EDIT_REMINDER:
      return {
        ...state,
        selectedItem: state.reminders.find(
          (item) => item.id === action.payload
        ),
      };
    case SET_DELETE_REMINDER:
      return {
        ...state,
        selectedItem: null,
        reminders: deleteItem(state.reminders, action.payload),
      };
    case SET_SAVE_REMINDER: {
      let updatedReminders = null;
      if (action.payload.id) {
        updatedReminders = editItem(state.reminders, action.payload);
      } else {
        updatedReminders = addItem(state.reminders, action.payload);
      }

      return {
        ...state,
        selectedItem: null,
        reminders: updatedReminders,
      };
    }
    case SET_CANCEL_EDIT_REMINDER:
      return { ...state, selectedItem: null };
    default:
      return state;
  }
};
