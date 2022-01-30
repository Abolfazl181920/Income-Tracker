import React, { useState, useEffect } from 'react';

import Header from './Components/Header';
import IncomeForm from './Components/IncomeForm';

const App = () => {

  const [ income, setIncome ] = useState([]);
  const [ totalIncome, setTotalIncome ] = useState(0);

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <IncomeForm />
    </div>
  );
}

export default App;