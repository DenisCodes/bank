
export const addPlayer = (name, initiative, type) => {
  return {
    type: 'ADD_PLAYER',
    payload: {
      name, initiative, type,
    }
  }
};

export const removePlayer = (playerId) => {
  return {
    type: 'REMOVE_PLAYER',
    payload: playerId
  }
};

export const nextTurn = () => {
  return {
    type: 'NEXT_TURN',
  };
}

export const prevTurn = () => {
  return {
    type: 'PREV_TURN',
  };
}

export const setAccountsList = (accounts) => {
  return {
    type: 'SET_ACCOUNTS',
    payload: accounts
  }
};