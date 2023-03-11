import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { parseDate, getMonthCalendar } from '../helpers/nahual';
import Nahual from './Nahual';
import { useContentContext } from './ContentProvider';

function Calendar({ date }) {
  const dateConfig = parseDate(date);
  const {
    monthName,
    year,
    weeks,
  } = getMonthCalendar(dateConfig);

  const { dayNames } = useContentContext();

  return (
    <Container>
      <div className="display-3">{`${monthName} - ${year}`}</div>
      <Row key="days">
        <Col className="d-none d-lg-block">
          <Row>
            {dayNames.map((name) => (
              <Col key={name}>
                <div className="text-uppercase font-weight-bold">{name}</div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      {
        Object.entries(weeks).map(([name, week]) => (
          <Row key={`week-${name}`}>
            {
              week.map(({
                day,
                nahual,
                nahualDay,
                isToday,
                weekDay,
              }) => (
                <Col sm={12} lg key={day}>
                  <Nahual
                    day={day}
                    nahual={nahual}
                    nahualDay={nahualDay}
                    isToday={isToday}
                    weekDay={weekDay}
                  />
                </Col>
              ))
            }
          </Row>
        ))
      }
    </Container>
  );
}

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Calendar;
