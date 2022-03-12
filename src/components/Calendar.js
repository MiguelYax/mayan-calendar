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
        <div className="container">
            <div className="calendar">
                <header>
                    <h2>{monthName} - {year}</h2>
                    <a className="" href="#"></a>
                    <a className="" href="#"></a>

                </header>
                <table>
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
                                        week.map(({ day, nahual, nahualDay, isToday }) =>
                                            <td> 
                                                <Nahual day={day} nahual={nahual} nahualDay={nahualDay} />
                                            </td>
                                        )}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Calendar;