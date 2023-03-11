import { parseDate, getMonthCalendar, dayNames } from '../utils'
import { Container, Row, Col, Card } from 'react-bootstrap'
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
        <Container>
            <div className='display-1'>{monthName} - {year}</div>
            <Row>
                <Col className="d-none d-lg-block" >
                    <Row>
                        {dayNames.map((name, key) => <Col key={key}>
                            <div className='text-uppercase font-weight-bold'>{name}</div>
                        </Col>)
                        }
                    </Row>
                </Col>
            </Row>
            {
                Object.entries(weeks).map(([key, week]) => {
                    return (
                        <Row key={`week-${key}`}> {
                            week.map((day) =>
                                <Col sm={12} lg={true} >
                                    <Nahual {...day} />
                                </Col>
                            )}
                        </Row>
                    )
                })
            }
        </Container>
    )
}

export default Calendar;