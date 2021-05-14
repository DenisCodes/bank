import React from 'react';

import AccountList from './AccountList';
import AmountList from "./AmountList";
import TransactionList from "./TransactionList";
import {connect} from "react-redux";
import {setTasks} from "../actions";
import axios from "axios";

class App extends React.Component {

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/matthewkeaton5/JsonDB322/accounts')
        .then(response => {
          console.log(response.data);
          this.props.setTasks(response.data);
        });
  }

  render() {
    return (
        <div className="container">
          <div className="row">

            <div className="col-sm-4">
              <AccountList title="Account" stateList="accounts" accountType="account"/>
            </div>

            <div className="col-sm-4">
              <AmountList title="Account" stateList="accounts" accountType="account"/>
            </div>

            <div className="col-sm-4">
              <TransactionList title="Transaction" stateList="transactions" accountType="transaction"/>
            </div>

          </div>
        </div>
    );
  }
}
  const  mapStateProps = (state) => {
    return {
      accounts: state.accounts.account,
      currentTurn: state.turn.current,
      transactions: state.accounts.transactions,
    }
  };

export default connect(mapStateProps, {setTasks})(App);