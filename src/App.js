import React from 'react';
import './App.css';
 
 
import {Balance} from './components/balance';
import {AccountSummary} from './components/AccountSummary';
import {TransactionHistory} from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';



import { GlobalProvider} from './context/globalState';
 

function App() {
  return (
    
    <GlobalProvider>
      <h1>Expense Tracker by Nabia Sabzwari</h1>
    <div className ="container">
      <Balance></Balance>
    </div>
    <div>
      <AccountSummary></AccountSummary>
    </div>
    <div>
      <TransactionHistory></TransactionHistory>
    </div>
    <div>
      <AddTransaction></AddTransaction>
    </div>
   
</GlobalProvider>
  );
}

export default App;
