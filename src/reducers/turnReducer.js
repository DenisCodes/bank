const DEFAULT_STATE = {
  current: 0,
  numAccounts: 9
};

const turnReducer = (state = DEFAULT_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {

    case 'ADD_ACCOUNT':
      newState.numAccounts += 1;
      return newState;

    case 'REMOVE_ACCOUNT':
      newState.numAccounts -= 1;
      return newState;

    case 'VIEW_ACCOUNT':
      return state;

    case 'NEXT_TURN':
      newState.current += 1;
      if (newState.current === newState.numAccounts) {
        newState.current = 0;
      }
      return newState;

    case 'PREV_TURN':
      newState.current -= 1;
      if (newState.current === -1) {
        newState.current = newState.numAccounts - 1;
      }
      return newState;

    default:
      return state;
  }
}

export default turnReducer;