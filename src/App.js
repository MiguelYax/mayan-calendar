import './App.css';
//import Calendar from './components/Calendar'
import Clock from './components/Clock'
function App() {

  const date = new Date();

  return (
    <Clock date={date} />
  );
}

export default App;
