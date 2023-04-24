import React, { useMemo, useState } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import classNames from 'classnames';
import { getMonthCalendar } from '../helpers/nahual';
import Nahual from './Nahual';
import { useContentContext } from './ContentProvider';

function Calendar() {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());

  const {
    monthName,
    weeks,
  } = useMemo(() => getMonthCalendar(year, month), [year, month]);

  const handleNextMonth = () => {
    const next = month + 1;
    if (next === 12) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(next);
    }
  };

  const handlePreviousMonth = () => {
    const previos = month - 1;
    if (previos === -1) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(previos);
    }
  };

  const { dayNames, darkMode } = useContentContext();

  const className = classNames('pt-2', {
    'bg-dark': darkMode,
    'text-light': darkMode,
  });

  return (
    <Container fluid>
      <Container className={className}>
        <Row>
          <Col className="d-grid p-0">
            <Button onClick={handlePreviousMonth}>{'<'}</Button>
          </Col>
          <Col className="d-grid p-0">
            <Button>
              {`${monthName} - ${year}`}
            </Button>
          </Col>
          <Col className="d-grid p-0">
            <Button onClick={handleNextMonth}>
              {'>'}
            </Button>
          </Col>
        </Row>
        <Row key={`row-${monthName}`}>
          {dayNames.map((name) => (
            <Col key={name} className="d-none d-lg-block">
              <div className="text-uppercase font-weight-bold">{name}</div>
            </Col>
          ))}
        </Row>
        {

          weeks.map((week) => (
            <Row key={week.id}>
              {
                week.days.map(({
                  day,
                  nahual,
                  nahualDay,
                  isToday,
                  weekDay,
                  id,
                }) => (
                  <Col sm={12} lg key={id}>
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
    </Container>
  );
}

export default Calendar;
