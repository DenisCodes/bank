import React from 'react';
import { connect } from 'react-redux';

import { addAccount } from "../actions";

class AddAccount extends React.Component {

  state = { name: '', amount: '' }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addAccount(this.state.name, this.state.amount, this.props.accountType);

    this.setState({ name: '', amount: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}
            style={{ padding: '0 12px 12px' }}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control"
                 name="name"
                 value={this.state.name}
                 onChange={event => this.setState({ name: event.target.value })} />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input type="text" className="form-control"
                 name="amount"
                 value={this.state.amount}
                 onChange={event => this.setState({ amount: event.target.value })} />
        </div>

        <input type="submit" className="btn btn-success" value={ 'Add Account' } />
      </form>
    );
  }

}

export default connect(null, { addAccount })(AddAccount);