import React from 'react';
import { connect } from 'react-redux';

import AddAccount from './AddAccount';

import { removeAccount } from "../actions";

class TransactionList extends React.Component {

    renderList() {
        let transactionList = this.props[this.props.stateList];

        return transactionList.map((acc, index) => {
            return (
                <li className='list-group-item' key={index}>
                    { acc.name }
                    <span className="badge badge-primary badge-pull">{ '$'+acc.amount+'.00' }</span>
                </li>
            );
        });
    }


    render() {
        const transactionList = this.renderList();

        return (
            <div className="card">
                <h3>{this.props.title} List</h3>
                <AddAccount accountType={this.props.accountType} />
                <ul className="list-group">
                    { transactionList }
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        transactions: state.accounts.transactions,
    };
};

export default connect(mapStateToProps, { removeAccount })(TransactionList);
//export default AccountList;