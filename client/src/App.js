import React, { useEffect, useState } from 'react';

import './App.css';

import TestData from './components/testData/testData';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/testData')
      .then(res => res.json())
      .then(testData => setData(testData));
  }, []);
  return (
    <div className='App'>
      <TestData testData={data} />
    </div>
  );
};

export default App;
