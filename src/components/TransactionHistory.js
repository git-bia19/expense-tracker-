import React,{useContext} from 'react';

//import {Transaction} from "./Transaction";
import {GlobalContext} from "../context/globalState";


export const TransactionHistory =()=>{

    const {transactions,deleteTransaction} = useContext(GlobalContext);
    const sign =transactions.TransactionAmount > 0 ? '-' : '+'
    return(
        <React.Fragment>
 
     <h3>Transaction History</h3>
     <ul className ="list">
      {transactions.map(transaction =>
         <li className="">
         {transaction.description}<span>{sign}${Math.abs(transaction.TransactionAmount)}</span>
         <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>X</button>
         </li>)}
     </ul>
     </React.Fragment>
    )

}