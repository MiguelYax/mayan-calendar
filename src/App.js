import Calendar from './components/Calendar'
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const date = new Date();

  return (
    <Container className='p-3'>
      <Container className='p-5 mb-4 bg-light rounded-3'>
        <Calendar date={date} />
      </Container>
    </Container>
  );
}

export default App;
