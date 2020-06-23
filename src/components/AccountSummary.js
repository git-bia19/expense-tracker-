import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);
    
        const amounts = transactions.map(transaction => transaction.TransactionAmount);

        const income = amounts
          .filter(item => item > 0)
          .reduce((acc, item) => (acc += item), 0)
          .toFixed(2);
      
        const expense = (
          amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
          -1
        ).toFixed(2);
      
        return (
          <div className="inc-exp-container">
              <div>
                <h4>Income +$0.00</h4>
        <p className="money plus">{income}</p>
              </div>
              <div>
                <h4>Expense -$0.00</h4>
        <p className="money minus">{expense}</p>
              </div>
            </div>
        )
        }