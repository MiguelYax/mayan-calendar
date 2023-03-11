import Calendar from './components/Calendar'
import { ThemeProvider, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const date = new Date();

  return (
    <ThemeProvider breakpoints={['lg', 'md', 'sm', 'xs']} minBreakpoint="xs" >
      <Container>
        <Calendar date={date} />
      </Container>
    </ThemeProvider >
  );
}

export default App;
