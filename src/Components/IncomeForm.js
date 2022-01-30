import React, { useRef } from 'react';

const IncomeForm = ({ income, setIncome }) => {

    const description = useRef(null);
    const date = useRef(null);
    const price = useRef(null);

    const addIncome = (event) => {

        event.preventDefault();

        let date = date.current.value.split("-");
        let newDate = new Date( date[0], date[1], date[2] );

        setIncome([...income, {
            "desc": description.current.value,
            "price": description.current.value,
            "date": newDate.getTime()
        }]);

        description.current.value = "";
        price.current.value = null;
        date.current.value = null;
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