import React from 'react';
import { connect } from 'react-redux';

import AddAccount from './AddAccount';

import { removeAccount } from "../actions";

class AccountList extends React.Component {

  renderList() {
    let accountList = this.props[this.props.stateList];

    return accountList.map((acc, index) => {
      return (
        <li className='list-group-item' key={index}>
          { acc.name }
            <button className="pl-1" type="button"
                    onClick={() => this.props.removeAccount(acc.id) }
                    className="btn btn-danger float-right" style={{marginLeft: '5px'}}>
            Delete
            </button>
            <button type="button"
                  className="btn btn-success float-right">
            Edit
            </button>
        </li>
      );
    });
  }


  render() {
    const accountList = this.renderList();

    return (
      <div className="card">
        <h3>{this.props.title} List</h3>
        <AddAccount accountType={this.props.accountType} />
        <ul className="list-group">
          { accountList }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    accounts: state.accounts.account,
    transactions: state.accounts.transactions,
  };
};

export default connect(mapStateToProps, { removeAccount })(AccountList);
//export default AccountList;