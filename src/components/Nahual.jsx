import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { dayIcons, nahualIcons } from './Days';
import { dayNames } from '../utils';

const days = dayIcons();
const nahuals = nahualIcons();

function Nahual({
  day,
  nahual,
  nahualDay,
  isToday,
  weekDay,
}) {
  if (!day) {
    return null;
  }

  return (
    <Card border={isToday && 'info'}>
      <Card.Header>
        <span>{day}</span>
        <span className="d-lg-none">{` - ${dayNames[weekDay]}`}</span>
      </Card.Header>
      <Card.Body>
        <Card.Title />
        <Card.Text>
          <p className="lead">{nahual}</p>
          {days[nahualDay]}
          {nahual && nahuals[nahual.replace(/'/g, '')]}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Nahual.propTypes = {
  day: PropTypes.number.isRequired,
  nahual: PropTypes.string.isRequired,
  nahualDay: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,

  weekDay: PropTypes.number.isRequired,

};

export default Nahual;
