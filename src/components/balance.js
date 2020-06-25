import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.TransactionAmount);

  const balance = amounts.reduce((acc, item ) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
    <h1 id ="balance">${balance}</h1>
    </>
  )
}
