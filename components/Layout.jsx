import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ContentContextProvider } from './ContentProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import { dayNames } from '../helpers/nahual';

function Layout({ children }) {
  return (
    <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']} minBreakpoint="sm">
      <ContentContextProvider contentData={{ dayNames }}>
        {children}
      </ContentContextProvider>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
