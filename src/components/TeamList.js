import React from 'react';
import { connect } from 'react-redux';

import AddPlayer from './AddPlayer';

import { removePlayer } from "../actions";

class TeamList extends React.Component {

  renderList() {
    let characterList = this.props[this.props.stateList];

    return characterList.map((char, index) => {
      return (
        <li className='list-group-item' key={index}>
          { char.name }
          <button type="button"
                  onClick={() => this.props.removePlayer(char.id) }
                  className="btn btn-danger" style={{ float: 'right' }}>
            Delete
          </button>
        </li>
      );
    });
  }


  render() {
    const characterList = this.renderList();

    return (
      <div className="card">
        <h3>{this.props.title} List</h3>
        <AddPlayer characterType={this.props.characterType} />
        <ul className="list-group">
          { characterList }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    players: state.characters.players,
    enemies: state.characters.enemies,
  };
};

export default connect(mapStateToProps, { removePlayer })(TeamList);
//export default TeamList;