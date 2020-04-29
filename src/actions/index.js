
export const addPlayer = (name, initiative, type) => {
  return {
    type: 'ADD_PLAYER',
    payload: {
      name, initiative, type,
    }
  }
};