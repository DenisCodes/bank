import React from 'react';

import TeamList from './TeamList';
import InitiativeList from "./InitiativeList";

const App = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="col-sm-4">
          <TeamList title="Players" stateList="players" characterType="player" />
        </div>

        <div className="col-sm-4">
          <InitiativeList/>
        </div>

        <div className="col-sm-4">
          <TeamList title="Enemies" stateList="enemies" characterType="enemy" />
        </div>

      </div>
    </div>
  );
};

export default App;