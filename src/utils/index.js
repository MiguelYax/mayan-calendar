const { nahual: nahualParser } = require('nahuales')

export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
export const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

export const parseDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const days = new Date(year, month, 0).getDate();

    return {
        year,
        month,
        day,
        days
    }
}

export const getMonthCalendar = ({ year, month, day, days }) => {
    const calendar = {
        year,
        month,
        monthName: monthNames[month],
        days,
        weeks: [[], [], [], [], []]
    }
    let week = 0;

    for (let i = 1; i <= days; i++) {
        const date = new Date(year, month, i);
        const weekDay = date.getDay();
        const nahual = nahualParser(date)

        if (i === 1 && weekDay > 1) {
            for (let j = 0; j < weekDay; j++) {
                calendar.weeks[week].push({});
            }
        }

        calendar.weeks[week].push({
            weekDay,            
            day: i,
            nahual: nahual.nahual,
            nahualDay: nahual.day,
            today: i === day,
        })

        if (weekDay === 6) {
            week++;
        }
    }

    return calendar;
}
