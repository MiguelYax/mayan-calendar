import './App.css';
import Calendar from './components/Calendar'
function App() {

  const date = new Date();

  return (
    <Calendar date={date} />
  );
}

export default App;
