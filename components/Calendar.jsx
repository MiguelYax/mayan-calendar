import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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

  const { dayNames, darkMode } = useContentContext();

  const className = classNames({
    'bg-dark': darkMode,
    'text-light': darkMode,
  });

  return (
    <Container className={className}>
      <div className="display-4">{`${monthName} - ${year}`}</div>
      <Row key={`row-${monthName}`}>
        {dayNames.map((name) => (
          <Col key={name} className="d-none d-lg-block">
            <div className="text-uppercase font-weight-bold">{name}</div>
          </Col>
        ))}
      </Row>
      {
        Object.entries(weeks).map(([name, week]) => (
          <Row key={`week-${name}-${week}`}>
            {
              week.map(({
                day,
                nahual,
                nahualDay,
                isToday,
                weekDay,
              }) => (
                <Col sm={12} lg key={`${week}-${day}`}>
                  {
                    day && (
                      <Nahual
                        day={day}
                        nahual={nahual}
                        nahualDay={nahualDay}
                        isToday={isToday}
                        weekDay={dayNames[weekDay]}
                      />
                    )
                  }
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
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Calendar;
