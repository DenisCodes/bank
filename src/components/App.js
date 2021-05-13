import React from 'react';

import AccountList from './AccountList';
import AmountList from "./AmountList";

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
          <AccountList title="Transaction" stateList="enemies" accountType="enemy" />
        </div>

      </div>
    </div>
  );
};

export default App;