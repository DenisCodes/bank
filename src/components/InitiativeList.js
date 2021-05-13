import React from 'react';
import { connect } from 'react-redux';

import {nextTurn, prevTurn} from "../actions";

const InitativeList = (props) => {
  const characterList = props.characters.sort((a, b) => {
    return b.initiative - a.initiative;
  }).map((char, index) => {
    let classes = 'list-group-item d-flex justify-content-between align-items-center';
    if (props.currentTurn === index) {
      classes = classes.concat(' active');
    }
    return (
      <li key={char.id}
          className={classes}>
        { char.name }
        <span className="badge badge-primary badge-pull">{ char.initiative }</span>
      </li>
    )
  });

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center" style={{marginBottom: '15px'}}>
        <button className="btn btn-primary" onClick={props.prevTurn}>Previous</button>
        <button className="btn btn-primary" onClick={props.nextTurn}>Next</button>
      </div>
      <ul className="list-group">
        { characterList }
      </ul>
    </div>
  )
};

const mapStateProps = (state) => {
  return {
    characters: state.characters.characters,
    currentTurn: state.turn.current,
  }
};

export default connect(mapStateProps, { nextTurn, prevTurn })(InitativeList);