const generateID = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};

const DEFAULT_STATE = {
  accounts: [
    { id: generateID(), name: 'Vlad', amount: 8, type: 'account' },
    { id: generateID(), name: 'Vesh', amount: 5, type: 'account' },
    { id: generateID(), name: 'Kritch', amount: 22, type: 'account' },
    { id: generateID(), name: 'Azreal', amount: 15, type: 'account' },
    { id: generateID(), name: 'Tasselhoff', amount: 19, type: 'account' },
    { id: generateID(), name: 'Fire Giant', amount: 6, type: 'enemy' },
    { id: generateID(), name: 'Frost Giant', amount: 1, type: 'enemy' },
    { id: generateID(), name: 'Storm Giant', amount: 18, type: 'enemy' },
    { id: generateID(), name: 'Cloud Giant', amount: 13, type: 'enemy' },
  ],
  players: [],
  enemies: [],
};

const sortAccounts = (state) => {
  let newState = {
    accounts: [ ...state.accounts ],
    players: state.accounts.filter(acc => acc.type === 'player'),
    enemies: state.accounts.filter(acc => acc.type === 'enemy'),
    state: state.totalAccounts
  };

  return newState;
};


const accountReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_ACCOUNT':
      action.payload.id = generateID();
      state.accounts.push(action.payload);
      return sortAccounts(state);
      break;

    case 'REMOVE_ACCOUNT':
      const accountIndex = state.accounts.findIndex(acc => acc.id === action.payload);
      state.accounts.splice(accountIndex, 1);
      state.totalAccounts -= 1;
      return sortAccounts(state);
      break;

    case 'SET_ACCOUNTS':
      return action.payload;

    default:
      return !state ? sortAccounts(DEFAULT_STATE) : state;
  }
}

export default accountReducer;