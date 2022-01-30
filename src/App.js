import React, { useState, useEffect } from 'react';

import Header from './Components/Header';
import IncomeForm from './Components/IncomeForm';
import IncomeList from './Components/IncomeList';

const App = () => {

  const [ income, setIncome ] = useState([]);
  const [ totalIncome, setTotalIncome ] = useState(0);

  useEffect(() => {

    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotalIncome(temp);

  }, [income]);
  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;