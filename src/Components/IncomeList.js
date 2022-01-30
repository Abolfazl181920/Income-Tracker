import React from 'react';

import IncomeItem from './IncomeItem';

const IncomeList = ({ income, setIncome }) => {

    const removeIncome = (i) => {
        let temp = income.filter((value, index) => index != i);
        setIncome(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }
    
    return(
        <div className="income-list">
            {
                income.sort(sortByDate).map((value, index) => (
                    <IncomeItem
                        key={index}
                        index={index}
                        income={value}
                        removeIncome={removeIncome}
                    />
                ))
            }
        </div>
    );
}

export default IncomeList;