import { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
import './Expenses.css'

function Expenses(props) {
    const [filteredYear, setfilteredYear] = useState('2021');

    const FilterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={FilterChangeHandler} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div >
    );
}

export default Expenses;