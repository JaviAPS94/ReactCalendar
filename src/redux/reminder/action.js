import axios from 'axios';

import CONSTANTS from '../../config/constants';

export const SET_FORWARD = 'SET_FORWARD';
export const SET_BACK = 'SET_BACK';
export const SET_ADD_REMINDER = 'SET_ADD_REMINDER';
export const SET_EDIT_REMINDER = 'SET_EDIT_REMINDER';
export const SET_SAVE_REMINDER = 'SET_SAVE_REMINDER';
export const SET_DELETE_REMINDER = 'SET_DELETE_REMINDER';
export const SET_CANCEL_EDIT_REMINDER = 'SET_CANCEL_EDIT_REMINDER';

export const moveForward = () => {
  return { type: SET_FORWARD };
};

export const moveBacward = () => {
  return { type: SET_BACK };
};

export const addItem = () => {
  return { type: SET_ADD_REMINDER };
};

export const editItem = (id) => {
  return { type: SET_EDIT_REMINDER, payload: id };
};

export const cancelEdit = () => {
  return { type: SET_CANCEL_EDIT_REMINDER };
};

export const saveItem = async (item) => {
  const weather = await getWeather(item.city);
  item.weather = weather;
  return { type: SET_SAVE_REMINDER, payload: item };
};

export const deleteItem = (id) => {
  return { type: SET_DELETE_REMINDER, payload: id };
};

const getWeather = async (city) => {
  const url = `${CONSTANTS.URL}?q=${city}&appid=${CONSTANTS.API_KEY}`;
  const result = await axios({
    method: 'GET',
    url,
    headers: {
      'content-type': 'application/json',
    },
  }).catch((e) => {
    return e.response.data;
  });

  if (result && result.status === 200) {
    return result.data.list;
  }
};
