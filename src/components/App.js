import React from 'react';

import AccountList from './AccountList';
import AmountList from "./AmountList";
import TransactionList from "./TransactionList";

const App = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="col-sm-4">
          <AccountList title="Accounts" stateList="accounts" accountType="account" />
        </div>

        <div className="col-sm-4">
          <AmountList/>
        </div>

        <div className="col-sm-4">
          <TransactionList title="Transaction" stateList="transactions" accountType="transaction" />
        </div>

      </div>
    </div>
  );
};

export default App;