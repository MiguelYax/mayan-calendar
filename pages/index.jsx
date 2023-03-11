import React from 'react';
import Calendar from '../components/Calendar';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const date = new Date();

  return (
    <Layout>
      <Calendar date={date} />
    </Layout>
  );
}

export default App;
