import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Calendar from './components/Calendar';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const date = new Date();

  return (
    <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']} minBreakpoint="sm">
      <Calendar date={date} />
    </ThemeProvider>
  );
}

export default App;
