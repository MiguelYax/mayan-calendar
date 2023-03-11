import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Calendar from '../components/Calendar';
import { ContentContextProvider } from '../components/ContentProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import { dayNames } from '../helpers/nahual';

function App() {
  const date = new Date();

  return (
    <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']} minBreakpoint="sm">
      <ContentContextProvider contentData={{ dayNames }}>
        <Calendar date={date} />
      </ContentContextProvider>
    </ThemeProvider>
  );
}

export default App;
