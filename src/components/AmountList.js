import React from 'react';
import { connect } from 'react-redux';

import {nextTurn, prevTurn} from "../actions";

const AmountList = (props) => {
    const accountList = props.accounts.sort((a, b) => {
        return b.amount - a.amount;
    }).map((acc, index) => {
        let classes = 'list-group-item d-flex justify-content-between align-items-center';
        return (
            <li key={acc.id}
                className={classes}>
                { acc.name }
                <span className="badge badge-primary badge-pull">{ '$'+acc.amount+'.00' }</span>
            </li>
        )
    });

    return (
        <div>
            <ul className="list-group">
                { accountList }
            </ul>
        </div>
    )
};

const mapStateProps = (state) => {
    return {
        accounts: state.accounts.accounts,
        currentTurn: state.turn.current,
    }
};

export default connect(mapStateProps, { nextTurn, prevTurn })(AmountList);