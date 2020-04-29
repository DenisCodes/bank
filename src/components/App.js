import React from 'react';

import TeamList from './TeamList';

const App = () => {
  return (
    <div className="container">
      <div className="row">

        <div className="col-sm-4">
          <TeamList />
        </div>

        <div className="col-sm-4">

        </div>

        <div className="col-sm-4">
          <TeamList />
        </div>

      </div>
    </div>
  );
};

export default App;