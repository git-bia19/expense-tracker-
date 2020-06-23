import React, {useContext} from 'react';
import { GlobalContext } from '../context/globalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.TransactionAmount < 0 ? '-' : '+';
  const transactionType = transaction.TransactionAmount > 0 ? 'plus' : 'minus';

  return (
    <li className={transactionType}>
      {transaction.description} <span>{sign}${Math.abs(transaction.TransactionAmount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}