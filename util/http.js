import axios from 'axios';

export const storeExpense = (expenseData) => {
    axios.post(
        'https://expense-tracker-5a75a-default-rtdb.firebaseio.com/expenses.json',
         expenseData
    );
}