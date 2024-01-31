import React, { useState } from 'react';

function BudgetTracker() {
  // State to keep track of transactions and balance
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);

  // Function to handle expense or income addition
  const addTransaction = (type) => {
    const newTransaction = {
      id: Date.now(),
      type,
      description,
      amount: parseFloat(amount),
    };

    // Update transactions list
    setTransactions([...transactions, newTransaction]);

    // Update balance
    setBalance((prevBalance) =>
      type === 'income' ? prevBalance + newTransaction.amount : prevBalance - newTransaction.amount
    );

    // Clear input fields
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h2>Budget Tracker</h2>

      <div>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => addTransaction('income')}>Add Income</button>
        <button onClick={() => addTransaction('expense')}>Add Expense</button>
      </div>

      <h3>Transactions:</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {transaction.type === 'income' ? '+' : '-'}
            ${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Total Balance: ${balance.toFixed(2)}</h3>
    </div>
  );
}

export default BudgetTracker;

