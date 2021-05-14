import React from 'react';
import { connect } from 'react-redux';

import {viewAccount} from "../actions";

class AmountList extends React.Component {
    renderList() {
        let amountList = this.props.accounts.sort((a, b) => {
            return b.amount - a.amount;
        })
            return amountList.map((acc, index) => {
            let classes = 'list-group-item d-flex justify-content-between align-items-center';
            return (
                <li key={acc.id} className={classes}>
                    {acc.name}
                    <span className="badge badge-primary badge-pull float-right">{'$' + acc.amount + '.00'}</span>
                    <button className="pl-1" type="button" onClick={() => this.props.viewAccount(acc.id)}
                            className="btn btn-success float-right">
                        view
                    </button>
                </li>
            )
        });


    }
    render(){
       const accountList = this.renderList();
        return (
            <div className="card">
                <h3>Account List</h3>
                <ul className="list-group">
                    {accountList}
                </ul>
            </div>
        )
    }
}
    const
    mapStateProps = (state) => {
        return {
            accounts: state.accounts.account,
            currentTurn: state.turn.current,
            transactions: state.accounts.transactions,
        }
    };


export default connect(mapStateProps, {viewAccount})(AmountList);