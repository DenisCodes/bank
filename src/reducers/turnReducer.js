const DEFAULT_STATE = {
  current: 0,
  numCharacters: 9
};

const turnReducer = (state = DEFAULT_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {

    case 'ADD_PLAYER':
      newState.numCharacters += 1;
      return newState;

    case 'REMOVE_PLAYER':
      newState.numCharacters -= 1;
      return newState;

    case 'NEXT_TURN':
      newState.current += 1;
      if (newState.current === newState.numCharacters) {
        newState.current = 0;
      }
      return newState;

    case 'PREV_TURN':
      newState.current -= 1;
      if (newState.current === -1) {
        newState.current = newState.numCharacters - 1;
      }
      return newState;

    default:
      return state;
  }
}

export default turnReducer;