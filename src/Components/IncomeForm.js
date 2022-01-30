import React, { useRef } from 'react';

const IncomeForm = ({ income, setIncome }) => {

    const description = useRef(null);
    const date = useRef(null);
    const price = useRef(null);

    const addIncome = (event) => {
        event.preventDefault();
    }

    return (
        <form className="income-form" onSubmit={addIncome}>
            <div className="form-inner">
                <input ref={description}
                    type="text"
                    id="desc"
                    placeholder="Income Description..."
                />

                <input
                    ref={price}
                    type="number"
                    id="price"
                    placeholder="Price..."
                />

                <input
                    ref={date}
                    type="date"
                    id="date"
                    placeholder="Income Description"
                    placeholder="Income Date..."
                />
                
                <input
                    type="submit"
                    value="Add Income"
                />
            </div>
        </form>
    )
}

export default IncomeForm;