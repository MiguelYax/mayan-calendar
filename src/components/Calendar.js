import './Calendar.scss'
import { parseDate, getMonthCalendar, dayNames } from '../utils'
import Nahual from './Nahual'


function Calendar({ date }) {
    const {
        monthName,
        year,
        weeks,
    } = getMonthCalendar(parseDate(date));


    return (
        <table>
            <caption>{monthName} - {year}</caption>
            <thead>
                <tr>
                    {
                        dayNames.map((day) => <th> {day} </th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    Object.entries(weeks).map(([key, week]) => {
                        return (
                            <tr key={`week-${key}`}> {
                                week.map(({ day, nahual, nahualDay }) =>
                                    <td>
                                        <span>{day} </span>
                                        <Nahual nahual={nahual} nahualDay={nahualDay} />
                                    </td>
                                )}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )

}

export default Calendar;