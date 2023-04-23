const { nahual: nahualParser } = require('nahuales');
const { uid } = require('uid');

export const monthNames = [
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
export const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const shortDayNames = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export const parseDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const days = new Date(year, month + 1, 0).getDate();

  return {
    year,
    month,
    day,
    days,
  };
};

const buildWeek = () => ({
  id: uid(),
  days: Array.from({ length: 7 }, () => ({ id: uid() })),
});

export const getMonthCalendar = ({
  year, month, day, days,
}) => {
  const calendar = {
    year,
    month,
    monthName: monthNames[month],
    days,
    weeks: [
      buildWeek(),
      buildWeek(),
      buildWeek(),
      buildWeek(),
      buildWeek(),
      buildWeek(),
    ],
  };
  let week = 0;

  for (let i = 1; i <= days; i += 1) {
    const date = new Date(year, month, i);
    const weekDay = date.getDay();
    const nahual = nahualParser(date);

    calendar.weeks[week].days[weekDay] = {
      id: uid(),
      weekDay,
      day: i,
      nahual: nahual.nahual,
      nahualDay: nahual.day,
      isToday: i === day,
    };
    if (weekDay === 6) {
      week += 1;
    }
  }

  return calendar;
};
