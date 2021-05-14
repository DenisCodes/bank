import React from 'react';
import { connect } from 'react-redux';

import { viewAccount } from "../actions";

class TransactionList extends React.Component {

    renderList() {
        let transactionList = this.props[this.props.stateList];

        return transactionList.map((acc, index) => {
            return (
                <li className='list-group-item' key={index}>
                    { acc.name }
                    <span className="badge badge-primary badge-pull float-right">{ '$'+acc.amount+'.00' }</span>
                </li>
            );
        });
    }


    render() {
        const transactionList = this.renderList();

        return (
            <div className="card">
                <h3>{this.props.title} List</h3>
                <ul className="list-group">
                    { transactionList }
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

export default connect(mapStateToProps, { viewAccount })(TransactionList);
//export default AccountList;