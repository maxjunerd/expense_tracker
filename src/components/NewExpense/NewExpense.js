import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const stopEditingHandler = () => {
        setIsEditing(true);
    }

    const startEditingHandler = () => {
        setIsEditing(false);
    }

        return (
            <div className='new-expense'>
                {!isEditing && <button onClick={stopEditingHandler}>Add New Expense</button>}
                {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={startEditingHandler}/>}
            </div>
        );
    }

    export default NewExpense;