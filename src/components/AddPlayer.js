import React from 'react';
import { connect } from 'react-redux';

import { addPlayer } from "../actions";

class AddPlayer extends React.Component {

  state = { name: '', initiative: '' }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addPlayer(this.state.name, this.state.initiative, 'player');

    this.setState({ name: '', initiative: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control"
                 name="name"
                 value={this.state.name}
                 onChange={event => this.setState({ name: event.target.value })} />
        </div>

        <div className="form-group">
          <label>Initiative</label>
          <input type="text" className="form-control"
                 name="initative"
                 value={this.state.initiative}
                 onChange={event => this.setState({ initiative: event.target.value })} />
        </div>

        <input type="submit" className="btn btn-success" value={ 'Add Player' } />
      </form>
    );
  }

}

export default connect(null, { addPlayer })(AddPlayer);