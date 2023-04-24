import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import config from '../package.json';

function Copyright({ currentYear }) {
  return (
    <Container className="text-center p-3">
      ©
      {' '}
      {currentYear}
      {' '}
      Copyright: Miguel Yax
      {' - '}
      Version:
      {' '}
      {config.version}
    </Container>
  );
}

Copyright.propTypes = {
  currentYear: PropTypes.number.isRequired,
};

export default Copyright;
