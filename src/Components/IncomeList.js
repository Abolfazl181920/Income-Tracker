import React from 'react';

import IncomeItem from './IncomeItem';

const IncomeList = ({ income, setIncome }) => {

    const removeIncome = (i) => {
        let temp = income.filter((value, index) => index != i);
        setIncome(temp);
    }
    return(
        <div className="income-list"></div>
    );
}

export default IncomeList;