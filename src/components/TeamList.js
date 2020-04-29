import React from 'react';
import { connect } from 'react-redux';

import AddPlayer from './AddPlayer';

class TeamList extends React.Component {

  renderList() {
    let characterList = this.props.characters;

    return characterList.map((char, index) => {
      return (
        <li className="list-group-item" key={index}>
          { char.name }
          <button type="button" className="btn btn-danger pull-right">
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
        <h3>Team List</h3>
        <AddPlayer />
        <ul className="list-group">
          { characterList }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    characters: state.characters.characters
  };
};

export default connect(mapStateToProps)(TeamList);
//export default TeamList;