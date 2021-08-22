import { parseDate, getMonthCalendar, dayNames } from '../utils'


function Calendar({ date }) {
    const {
        monthName,
        weeks
    } = getMonthCalendar(parseDate(date));


    return (
        <table>
           <caption>{monthName}</caption>
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
                                week.map(({ day, nahual }) =>
                                    <td>
                                        <p> {nahual} </p>
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