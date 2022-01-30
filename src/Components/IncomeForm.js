import React, { useRef } from 'react';

const IncomeForm = ({ income, setIncome }) => {

    const description = useRef(null);

    return (
        <form className="income-form">
            <div className="form-inner">
                <input ref={description} type="text" id="desc" name="desc" placeholder="Income Description..." />
                <input type="number" id="price" name="price" placeholder="Price..." />                
                <input type="date" id="date" name="date" placeholder="Income Description" placeholder="Income Date..." />
                <input type="submit" value="Add Income" />
            </div>
        </form>
    )
}

export default IncomeForm;