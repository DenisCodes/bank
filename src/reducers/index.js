import { combineReducers } from "redux";

const DEFAULT_STATE = {
  characters: [
    { id: 1, name: 'Vlad', initiative: 8, type: 'player' },
    { id: 2, name: 'Vesh', initiative: 5, type: 'player' },
    { id: 3, name: 'Kritch', initiative: 22, type: 'player' },
    { id: 4, name: 'Azreal', initiative: 15, type: 'player' },
    { id: 5, name: 'Tasselhoff', initiative: 19, type: 'player' },
    { id: 6, name: 'Fire Giant', initiative: 6, type: 'enemy' },
    { id: 7, name: 'Frost Giant', initiative: 1, type: 'enemy' },
    { id: 8, name: 'Storm Giant', initiative: 18, type: 'enemy' },
    { id: 9,  name: 'Cloud Giant', initiative: 13, type: 'enemy' },
  ],
  players: [],
  enemies: []
};

const characterReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {

    case 'ADD_PLAYER':
      let newState = {
        characters: [ ...state.characters ],
        players: [],
        enemies: [],
      };

      action.payload.id = state.characters.length + 1;
      newState.characters.push(action.payload);
      return newState;
      break;

    default:
      return state;
  }
}

export default combineReducers({
  characters: characterReducer
});