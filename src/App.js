import Calendar from './components/Calendar'
import { ThemeProvider, Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const date = new Date();

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Container className='p-3'>
        <Calendar date={date} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
