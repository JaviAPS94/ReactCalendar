import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  getISOWeek,
  addDays,
  isSameMonth,
  isToday,
} from 'date-fns';

export const monthTitles = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const dayTitles = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const startOfCalendar = (date) => {
  return startOfWeek(startOfMonth(date));
};

export const endOfCalendar = (date) => {
  return endOfWeek(endOfMonth(date));
};

export const getDayId = (date) => {
  return `${date.getFullYear()}_${date.getMonth()}_${date.getDate()}`;
};

export const createMonthCalendar = (date) => {
  let day = startOfCalendar(date);
  const end = endOfCalendar(date);

  const month = {
    id: `${day.getFullYear()}_${day.getMonth()}`,
    title: `${monthTitles[date.getMonth()]} ${date.getFullYear()}`,
    weeks: [],
  };

  while (day <= end) {
    const weekNumber = getISOWeek(endOfWeek(day));
    const week = {
      id: `${day.getFullYear()}_${weekNumber}`,
      number: weekNumber,
      days: [],
    };

    for (let i = 0; i < 7; i++) {
      week.days.push({
        id: getDayId(day),
        date: day,
        isSameMonth: isSameMonth(day, date),
        isToday: isToday(day),
        isBeginOrLast:
          (i === 0 || i === 6) && isSameMonth(day, date) ? true : false,
      });

      day = addDays(day, 1);
    }
    month.weeks.push(week);
  }
  return month;
};
