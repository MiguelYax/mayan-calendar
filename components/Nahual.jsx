import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { dayIcons, nahualIcons } from './Days';
import { useContentContext } from './ContentProvider';

const days = dayIcons();
const nahuals = nahualIcons();

function Nahual({
  day,
  nahual,
  nahualDay,
  isToday,
  weekDay,
}) {
  if (!day) { return null; }

  const { darkMode } = useContentContext();
  const className = classNames('mb-2', {
    'bg-dark': darkMode,
    'text-light': darkMode,
    'border-info': isToday,
    'border-light': !isToday && darkMode,
  });
  return (
    <Card className={className} key={`card-${day}`}>
      <Card.Header>
        <span>{day}</span>
        <span className="d-lg-none">{` - ${weekDay}`}</span>
      </Card.Header>
      <Card.Body>
        <Card.Title>{nahual}</Card.Title>
        <Card.Text className="text-center">
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
  nahualDay: PropTypes.number.isRequired,
  isToday: PropTypes.bool.isRequired,
  weekDay: PropTypes.string.isRequired,
};

export default Nahual;
