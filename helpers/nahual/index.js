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

const buildWeek = () => ({
  id: uid(),
  days: Array.from({ length: 7 }, () => ({ id: uid() })),
});

export const getMonthCalendar = (year, month) => {
  const currentDate = new Date();

  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const date = new Date(year, month + 1, 0);
  const days = date.getDate();

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
    const dayDate = new Date(year, month, i);
    const weekDay = dayDate.getDay();
    const nahual = nahualParser(dayDate);

    calendar.weeks[week].days[weekDay] = {
      id: uid(),
      weekDay,
      day: i,
      nahual: nahual.nahual,
      nahualDay: nahual.day,
      isToday: i === currentDay && year === currentYear,
    };
    if (weekDay === 6) {
      week += 1;
    }
  }

  return calendar;
};
