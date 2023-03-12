import React, { useState } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { ContentContextProvider } from './ContentProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import { dayNames } from '../helpers/nahual';

import Navigation from './Navigation';

function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']} minBreakpoint="sm">
      <ContentContextProvider contentData={{ dayNames, darkMode }}>
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      </ContentContextProvider>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
