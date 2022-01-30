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
            <div className="desc"> {income.desc} </div>
            <div className="price"> ${income.price} </div>
            <div className="date"> {day + "/" + month + "/" + year} </div>
        </div>
    )
}

export default IncomeItem;