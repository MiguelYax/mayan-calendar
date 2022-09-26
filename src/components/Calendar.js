import { parseDate, getMonthCalendar, dayNames } from '../utils'
import { Table } from 'react-bootstrap'
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';
import Nahual from './Nahual'

function Calendar({ date }) {
    const dateConfig = parseDate(date);
    console.log(dateConfig)
    const {
        monthName,
        year,
        weeks,
    } = getMonthCalendar(dateConfig);


    return (
        <>
            <header>
                <h2>{monthName} - {year}</h2>

            </header>
            <Table variant='light'>
                <thead>
                    <tr>
                        {
                            dayNames.map((day, key) => <th key={key}> {day} </th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(weeks).map(([key, week]) => {
                            return (
                                <tr key={`week-${key}`}> {
                                    week.map((day) =>
                                        <td>
                                            <Nahual {...day} />
                                        </td>
                                    )}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Calendar;