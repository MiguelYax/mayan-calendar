import React, { useMemo, useState } from 'react';
import {
  Container, Row, Col, Button, Modal, Dropdown, DropdownButton, ButtonGroup,
} from 'react-bootstrap';
import classNames from 'classnames';
import { getMonthCalendar, monthNames } from '../helpers/nahual';
import Nahual from './Nahual';
import { useContentContext } from './ContentProvider';
import Copyright from './Copyright';

function Calendar() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [show, setShow] = useState(false);

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

  const handleShow = () => setShow(true);

  const handlePreviousMonth = () => {
    const previos = month - 1;
    if (previos === -1) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(previos);
    }
  };

  const handleClose = () => setShow(false);

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
            <Button onClick={handleShow}>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Calendar </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="d-grid ">
              <DropdownButton
                as={ButtonGroup}
                onSelect={(value) => {
                  setMonth(value);
                }}
                title={monthNames[month]}
              >
                {
                  monthNames.map((name, i) => (
                    <Dropdown.Item eventKey={i}>
                      {name}
                    </Dropdown.Item>
                  ))
                }
              </DropdownButton>
            </Col>
            <Col className="d-grid ">
              <DropdownButton
                as={ButtonGroup}
                onSelect={(value) => { setYear(value); }}
                title={year}
              >
                {
                  Array.from({ length: 60 }, (v, i) => {
                    const value = currentYear - i;
                    return (
                      <Dropdown.Item
                        eventKey={value}
                        active={(value === year)}
                      >
                        {value}
                      </Dropdown.Item>
                    );
                  })

                }
              </DropdownButton>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Copyright currentYear={currentYear} />
    </Container>
  );
}

export default Calendar;
