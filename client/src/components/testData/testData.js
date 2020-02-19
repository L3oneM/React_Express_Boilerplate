import React from 'react';

import './testData.css';

const TestData = ({ testData }) => {
  return (
    <div>
      <h2>TestData</h2>
      {testData.map(t => (
        <div key={t.id}>
          <p>{t.name}</p>
          <p>{t.last}</p>
        </div>
      ))}
    </div>
  );
};

export default TestData;
