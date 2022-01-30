import React from 'react';

const IncomeItem = ({ income, index, removeIncome }) => {

    let data = new Date(income.Date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandler = (i) => {
        removeIncome(i);
    }
    return (
        <div className="income-item">
            <button
                className="remove-item"
                onClick={() => removeHandler(index)}>
                    X
            </button>
        </div>
    )
}

export default IncomeItem;